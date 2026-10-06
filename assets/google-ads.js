(function () {
  'use strict';

  document.addEventListener('click', function (event) {
    var target = event.target;
    var link = target instanceof Element ? target.closest('a[href]') : null;
    if (!link || event.defaultPrevented) return;

    var destination = new URL(link.href, window.location.href);
    if (destination.protocol !== 'https:' ||
        destination.hostname !== 'wa.me' ||
        destination.pathname !== '/5515997024260') return;

    // This measures a WhatsApp click, not a completed conversation or sale.
    // Keep native link navigation so WhatsApp works even if tracking is blocked.
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18476625657/qikYCOWa648dEPndq-pE'
      });
    }
  });
})();
