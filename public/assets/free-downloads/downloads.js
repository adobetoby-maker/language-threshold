(() => {
  const form = document.querySelector('#free-download-form');
  const query = new URLSearchParams(location.search);
  const allowedAttribution = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
  // Keep the campaign across same-site navigation without storing an email.
  try {
    const saved = JSON.parse(sessionStorage.getItem('lt.free-download-attribution') || '{}');
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
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (submit.disabled || !form.reportValidity()) return;
    submit.disabled = true; submit.textContent = 'Preparing your download…'; status.textContent = '';
    const payload = Object.fromEntries(new FormData(form));
    payload.consent = form.elements.namedItem('consent').checked;
    try { Object.assign(payload, JSON.parse(sessionStorage.getItem('lt.free-download-attribution') || '{}')); } catch { /* optional */ }
    for (const k of allowedAttribution) if (query.get(k)) payload[k] = query.get(k).slice(0,80);
    try {
      const response = await fetch('/api/email-capture', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload) });
      const data = await response.json();
      if (!response.ok || !data.ok || !data.downloadUrl) throw Error(data.error || 'Please try again shortly.');
      form.hidden = true; success.hidden = false;
      success.querySelector('h2').textContent = data.title;
      success.querySelector('[data-download-notice]').textContent = data.notice;
      success.querySelector('[data-download-instructions]').textContent = data.instructions;
      const link = success.querySelector('a[data-download-link]');
      link.href = data.downloadUrl;
      link.textContent = data.format === 'PDF' ? 'Download my free PDF ↓' : 'Open my printable resource →';
      success.focus();
      window.dataLayer?.push({ event:'free_resource_request', resource_id:data.resourceId, resource_format:data.format });
    } catch (error) { status.textContent = error.message || 'Please try again shortly.'; }
    finally { submit.disabled = false; submit.textContent = 'Get my free resource →'; }
  });
})();
