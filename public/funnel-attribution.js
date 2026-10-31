(() => {
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const campaign = new URLSearchParams(location.search);
  const allowed = new Set(['languagethreshold.com', 'app.languagethreshold.com', 'constructionspanish.app', 'medicalspanish.app']);
  function decorate(anchor) {
    try {
      const url = new URL(anchor.href, location.href);
      if (!allowed.has(url.hostname) || url.hostname === location.hostname) return;
      for (const key of keys) {
        const value = campaign.get(key);
        if (value && value.length <= 200 && !url.searchParams.has(key)) url.searchParams.set(key, value);
      }
      if (!url.searchParams.has('utm_source')) {
        url.searchParams.set('utm_source', location.hostname);
        url.searchParams.set('utm_medium', 'referral');
      }
      anchor.href = url.href;
    } catch { /* A malformed link must never prevent navigation. */ }
  }
  document.addEventListener('click', event => {
    const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (anchor) decorate(anchor);
  }, true);
})();
