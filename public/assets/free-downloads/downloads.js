(() => {
  const form = document.querySelector('#free-download-form');
  const query = new URLSearchParams(location.search);
  const allowedAttribution = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
  // Keep the campaign across same-site navigation without storing an email.
  try {
    const saved = JSON.parse(sessionStorage.getItem('lt.free-download-attribution') || '{}');
    if (!saved.landing_page) saved.landing_page = location.pathname;
    if (!saved.referrer_host && document.referrer) { try { saved.referrer_host = new URL(document.referrer).hostname; } catch {} }
    for (const k of allowedAttribution) if (query.get(k)) saved[k] = query.get(k).slice(0, 80);
    sessionStorage.setItem('lt.free-download-attribution', JSON.stringify(saved));
  } catch { /* Storage is optional. */ }
  if (!form) return;
  const select = form.elements.namedItem('resourceId');
  if ([...select.options].some(o => o.value === query.get('resource'))) select.value = query.get('resource');
  for (const button of document.querySelectorAll('[data-pick-resource]')) button.addEventListener('click', () => {
    select.value = button.dataset.pickResource;
    select.dispatchEvent(new Event('change'));
    form.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    form.elements.namedItem('email').focus({ preventScroll: true });
  });
  const status = document.querySelector('#free-download-status');
  const success = document.querySelector('#free-download-success');
  const submit = form.querySelector('button[type=submit]');
  let widgetId, protectionReady = false, protectionRequired = false;

  let marketingReady=false, consentPolicyVersion='lt-practice-separate-v1';
  fetch('/api/email-capture?status=marketing',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('Policy unavailable');return r.json();}).then(config=>{
    if(config.enabled===true && config.supportsDirectMarketing===true && config.policyVersion==='lt-product-marketing-v1' && config.copy==='Send my free resource and Language Threshold practice and product emails. I can change preferences or unsubscribe at any time.') {
      consentPolicyVersion=config.policyVersion;
      const consent=form.elements.namedItem('consent');consent.checked=false;
      const label=form.querySelector('.fd-consent span');if(label)label.textContent=config.copy;
      const notice=form.querySelector('.fd-consent + small');if(notice)notice.innerHTML='Your download does not require a paid subscription. <a href="https://languagethreshold.com/privacy">Privacy policy</a>.';
    }
  }).catch(()=>{/* Keep the existing separate-invitation wording on an unavailable policy. */}).finally(()=>{marketingReady=true;submit.disabled=!protectionReady;});
  submit.disabled = true;
  const check = document.createElement('div');
  check.setAttribute('aria-label', 'Bot protection');
  submit.before(check);
  // Fetch public configuration. A failed read cannot silently bypass protection.
  fetch('/api/email-capture?status=protection', {cache:'no-store'}).then(r => {
    if (!r.ok) throw Error('Bot check is unavailable. Please reload shortly.');
    return r.json();
  }).then(config => {
    if (config.version !== 1 || typeof config.required !== 'boolean' || typeof config.ready !== 'boolean') throw Error('Bot check is unavailable. Please reload shortly.');
    protectionRequired = config.required;
    if (!config.required) {protectionReady = true; submit.disabled = !marketingReady; return;}
    if (!config.ready || !config.sitekey) throw Error('Downloads are temporarily unavailable. Please try again shortly.');
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.onerror = () => {status.textContent = 'Bot check could not load. Please reload shortly.';};
    script.onload = () => {
      // An asynchronously loaded API must render directly after load. Calling
      // turnstile.ready() here is rejected by the real SDK before a widget starts.
      try {
        if (typeof window.turnstile?.render !== 'function') throw Error('Bot SDK unavailable');
        widgetId = window.turnstile.render(check, {
          sitekey:config.sitekey, action:config.action,
          callback:() => {protectionReady = true; submit.disabled = !marketingReady; status.textContent = '';},
          'expired-callback':() => {protectionReady = false; submit.disabled = true; window.turnstile.reset(widgetId);},
          'error-callback':() => {protectionReady = false; submit.disabled = true; status.textContent = 'Please retry the bot check or reload the page.'}
        });
      } catch {
        protectionReady = false; submit.disabled = true;
        status.textContent = 'Bot check could not start. Please reload the page or try again shortly.';
      }
    };
    document.head.append(script);
  }).catch(error => {status.textContent = error.message;});
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (submit.disabled || !marketingReady || !protectionReady || !form.reportValidity()) return;
    submit.disabled = true; submit.textContent = 'Preparing your download…'; status.textContent = '';
    const payload = Object.fromEntries(new FormData(form));
    if (protectionRequired) payload['cf-turnstile-response'] = window.turnstile.getResponse(widgetId);
    payload.consent = form.elements.namedItem('consent').checked;
    try { Object.assign(payload, JSON.parse(sessionStorage.getItem('lt.free-download-attribution') || '{}')); } catch { /* optional */ }
    for (const k of allowedAttribution) if (query.get(k)) payload[k] = query.get(k).slice(0,80);
    payload.signup_page = location.pathname;
    payload.policyVersion = consentPolicyVersion;
    payload.landing_page ||= location.pathname;
    try {
      const response = await fetch('/api/email-capture', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload) });
      const data = await response.json();
      if (!response.ok || !data.ok || !data.downloadUrl) throw Error(data.error || 'Please try again shortly.');
      form.hidden = true; success.hidden = false;
      success.querySelector('h2').textContent = data.title;
      if(data.marketingAccepted===true){const hint=success.querySelector('.fd-small:last-of-type');if(hint)hint.textContent='Save your resource link now. Your requested practice emails include preference and unsubscribe controls.';}
      success.querySelector('[data-download-notice]').textContent = data.notice;
      success.querySelector('[data-download-instructions]').textContent = data.instructions;
      const link = success.querySelector('a[data-download-link]');
      link.href = data.downloadUrl;
      link.textContent = data.format === 'PDF' ? 'Download my free PDF ↓' : 'Open my printable resource →';
      success.focus();
      window.dataLayer?.push({ event:'free_resource_request', resource_id:data.resourceId, resource_format:data.format });
    } catch (error) { status.textContent = error.message || 'Please try again shortly.'; }
    finally {
      if (widgetId !== undefined) {protectionReady = false; window.turnstile.reset(widgetId);}
      submit.disabled = !marketingReady || (protectionRequired && !protectionReady); submit.textContent = 'Get my free resource →';
    }
  });
})();
