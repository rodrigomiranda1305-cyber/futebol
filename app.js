// Preenche preços e links do checkout a partir do config.js (com as UTMs da visita).
(function () {
  var C = window.TF_CONFIG || {};
  var get = function (k) { return k.split('.').reduce(function (o, p) { return o && o[p]; }, C); };
  document.querySelectorAll('[data-v]').forEach(function (el) { el.textContent = get(el.getAttribute('data-v')) || ''; });
  var qs = location.search.replace(/^\?/, '');
  document.querySelectorAll('[data-checkout]').forEach(function (a) {
    var url = (C[a.getAttribute('data-checkout')] || {}).checkout;
    if (!url) return;
    a.href = url + (qs ? (url.indexOf('?') < 0 ? '?' : '&') + qs : '');
  });
  if (C.email) document.getElementById('contato').innerHTML = 'Suporte: <a href="mailto:' + C.email + '" style="color:inherit">' + C.email + '</a>';
})();
