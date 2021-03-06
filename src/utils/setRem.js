(function (doc, win) {
  const docEl = doc.documentElement;
  const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  function recalc() {
    var { clientWidth } = docEl;
    if (!clientWidth) {
      return false;
    }
    // 750的设计稿
    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
  }
  if (!doc.addEventListener) {
    return false;
  }
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

