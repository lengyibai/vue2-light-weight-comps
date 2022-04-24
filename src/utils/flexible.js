(function flexible(window, document) {
  //Root Font Size 150px
  const el = document.documentElement;
  const clientWidth = el.clientWidth / 10;
  function setRemUnit() {
    let rem = 0;

    rem = el.clientWidth / 10;
    /* 当缩小到一定距离时时，增加大小作为过小补偿 */
    console.log(rem, clientWidth / 2);
    if (rem < 96) {
      rem *= 1.5;
    }
    console.log(rem);
    el.style.fontSize = rem + "px";
  }

  window.addEventListener("resize", setRemUnit);
  window.addEventListener("pageshow", setRemUnit);
})(window, document);
