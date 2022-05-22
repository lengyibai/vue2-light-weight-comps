//#####··········文字悬浮变色··········#####//
const textHoverColor = {
  inserted(el) {
    const mask = document.createElement("div");
    mask.innerHTML = el.innerHTML;
    mask.style.cssText = `
    z-index: 9;
    position: absolute;
    top: 0;
    left: 0;
    color: transparent;
    background-color: #fff;
    transition: all 0.25s;
    animation: light 3s infinite;
    -webkit-background-clip: text;
    clip-path: circle(75% at 50% 50%);
    `;

    el.appendChild(mask);
    el.addEventListener("mouseenter", () => {
      mask.style.clipPath = "circle(0% at 50% 50%)";
    });
    el.addEventListener("mouseleave", () => {
      mask.style.clipPath = "circle(75% at 50% 50%)";
    });
  },
};

let directives = {
  textHoverColor,
};
export default {
  install(Vue) {
    Object.keys(directives).forEach((directive) => {
      Vue.directive(directive, directives[directive]);
    });
  },
};
