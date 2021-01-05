document
  .querySelectorAll('a[href="' + document.URL + '"]')
  .forEach(function (link) {
    link.className += ' current-link';
  });
