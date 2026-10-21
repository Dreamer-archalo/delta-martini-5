/* Cloudflare Web Analytics - Delta Martini 5
 * Incolla qui il "Site Token" pubblico mostrato nella pagina Web Analytics di Cloudflare.
 * Non inserire API token o password. Con il valore vuoto il monitoraggio resta disattivato.
 */
(() => {
  'use strict';
  const siteToken = '9412be5d019244b3bdf833e4bff8a592';

  if (!siteToken.trim()) return;

  const beacon = document.createElement('script');
  beacon.type = 'module';
  beacon.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  beacon.setAttribute('data-cf-beacon', JSON.stringify({ token: siteToken.trim() }));
  document.body.appendChild(beacon);
})();
