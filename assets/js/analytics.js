/* PostHog analytics — loaded on every page.
   Paste the project API key from PostHog → Settings → Project → Project API key.
   The key is public by design (it can only send events, not read them). */
(function () {
  var POSTHOG_KEY = 'phc_CT58znqp9xf6tCfXvhACkf6sB4VKmi3x53NMsZKPo4ob';
  var POSTHOG_HOST = 'https://us.i.posthog.com'; // EU projects: https://eu.i.posthog.com

  var host = location.hostname;
  var isLocal = location.protocol === 'file:' || host === 'localhost' || host === '127.0.0.1' || host.endsWith('.local');

  // No-op stub so calls like posthog.capture() never throw when tracking is off.
  if (POSTHOG_KEY.indexOf('REPLACE') !== -1 || isLocal) {
    window.posthog = window.posthog || { capture: function () {}, __disabled: true };
    return;
  }

  /* Official PostHog loader snippet */
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: 'identified_only',
    capture_pageview: true,
    capture_pageleave: true,
    session_recording: { maskAllInputs: true }
  });

  // Custom events for dashboard-friendly tracking (autocapture still records everything else).
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href');

    var caseStudy = href.match(/(?:^|\/)work\/([\w-]+)\.html/);
    if (caseStudy) {
      posthog.capture('case_study_clicked', {
        project: caseStudy[1],
        source: a.classList.contains('project-card') ? 'project_grid' : 'link'
      });
      return;
    }

    var social = href.match(/\/\/(?:www\.)?(linkedin|dribbble|x)\.com/);
    if (social) {
      posthog.capture('social_link_clicked', { network: social[1] });
    }
  }, true);
})();
