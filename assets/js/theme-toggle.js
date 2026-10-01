/* Light / dark mode toggle. The initial theme is set inline in head.html. */
(function () {
  var root = document.documentElement;

  function setTheme(t, save) {
    root.setAttribute('data-theme', t);
    if (save) { try { localStorage.setItem('theme', t); } catch (e) {} }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
      });
    }
  });

  // Follow system changes unless the visitor has picked a theme
  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var onChange = function (e) {
      var saved = null;
      try { saved = localStorage.getItem('theme'); } catch (err) {}
      if (saved !== 'dark' && saved !== 'light') { setTheme(e.matches ? 'dark' : 'light', false); }
    };
    if (mq.addEventListener) { mq.addEventListener('change', onChange); } else if (mq.addListener) { mq.addListener(onChange); }
  }
})();
