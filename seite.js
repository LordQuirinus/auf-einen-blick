// Auf einen Blick — Video erst auf Klick laden (youtube-nocookie), sonst kein fremder Server.
(function () {
  document.querySelectorAll('.video[data-video]').forEach(function (fig) {
    var knopf = fig.querySelector('.video-knopf');
    if (!knopf) return;
    knopf.addEventListener('click', function () {
      var id = fig.getAttribute('data-video');
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0&hl=de';
      iframe.title = knopf.getAttribute('aria-label') || 'Video';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      knopf.replaceWith(iframe);
      iframe.focus();
    });
  });
})();
