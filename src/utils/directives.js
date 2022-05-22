//#####··········全屏背景视差··········#####//
//####········视频········####//
const parallaxBg = {
  inserted(el) {
    el.style.cssText = `
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    `;
    const size = [
      [15, 1.1],
      [10, 1.225],
      [5, 1.35],
    ];
    const multiple = size[1][0];
    function transformElement(x, y) {
      let box = el.getBoundingClientRect();
      let calcY = (box.height / 2 - (y - box.y)) / multiple;
      let calcX = (box.width / 2 - (x - box.x)) / multiple;
      el.style.transform = `translateY(${calcY}px) translateX(${calcX}px) scale(${size[1][1]})`;
    }
    el.parentElement.addEventListener("mousemove", (e) => {
      requestAnimationFrame(function () {
        transformElement(e.clientX, e.clientY);
      });
    });
  },
};

//#####··········粒子效果··········#####//
import { $random, $frameInterval } from "@/utils/lyb.js";
//####········纵向········####//
const particle = {
  inserted(el, binding) {
    const box = el;
    let {
      color = "#cfb45c",
      size = 10,
      brightness = 1.5,
      contrast = 1.1,
      filter = true,
    } = binding.value || {};
    if (filter) el.style.transition = "all 0.25s";
    const style = `
      position: absolute;
      background-color: ${color};
      pointer-events: none;
      width: ${size}px;
      height: ${size}px;
      bottom:0;
      box-shadow: 0 0 10px 0 ${color};
      filter: contrast(125%) brightness(125%);
      `;
    const box_width = box.offsetWidth;
    const box_height = box.offsetHeight;

    $frameInterval(() => {
      const left = $random(0, box_width - size),
        top = $random(box_height / 2, box_height),
        scale = $random(0.25, 0.75, 1),
        time = $random(0.5, 2, 1),
        c = document.createElement("span");
      c.style.cssText = style;
      c.style.left = left + "px";
      c.style.transform = `scale(${scale})`;
      c.style.transition = `all ${time}s linear`;
      box.appendChild(c);
      setTimeout(() => {
        c.style.bottom = top / 1.5 + "px";
        setTimeout(() => {
          c.style.transition = `all ${time / 4}s linear`;
          c.style.opacity = 0;
        }, time * 1000 - (time * 1000) / 4);
        setTimeout(() => {
          c.remove();
        }, time * 1000);
      });
    }, 50);
    el.addEventListener("mouseenter", () => {
      if (!filter) return;
      el.style.filter = `brightness(${brightness * 100}%) contrast(${
        contrast * 100
      }%)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.filter = "";
    });
  },
};

//####········横向········####//
/* const particle1 = {
  inserted(el, binding) {
    const box = el;
    el.style.transition = "all 0.25s";
    let {
      color = "#cfb45c",
      size = 10,
      brightness = 1.5,
      contrast = 1.1,
      filter = true,
    } = binding.value || {};
    const style = `
      position: absolute;
      background-color: ${color};
      pointer-events: none;
      width: ${size}px;
      height: ${size}px;
      left:0;
      transform:scale(0);
      box-shadow: 0 0 10px 0 ${color};
      filter: contrast(125%) brightness(125%);
      `;
    const box_width = box.offsetWidth;
    const box_height = box.offsetHeight;

    $frameInterval(() => {
      const top = $random(0, box_height - size),
        left = $random(box_width / 2, box_width),
        scale = $random(0.5, 1, 1),
        time = $random(0.5, 1, 1),
        c = document.createElement("span");
      c.style.cssText = style;
      c.style.top = top + "px";
      c.style.transition = `all ${time}s linear`;
      box.appendChild(c);
      setTimeout(() => {
        c.style.transform = `scale(${scale})`;
        c.style.left = left / 1.5 + "px";
        setTimeout(() => {
          c.style.transition = `all ${time / 4}s linear`;
          c.style.opacity = 0;
        }, time * 1000 - (time * 1000) / 4);
        setTimeout(() => {
          c.remove();
        }, time * 1000);
      });
    }, 100);
    el.addEventListener("mouseenter", () => {
      if (!filter) return;
      el.style.filter = `brightness(${brightness * 100}%) contrast(${
        contrast * 100
      }%)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.filter = "";
    });
  },
}; */

//#####··········底部渐变··········#####//
const maskGradient = {
  inserted(el) {
    const mask = document.createElement("div");
    el.style.position = "relative";
    mask.style.cssText = `
    position: absolute;
    inset:0;
    background-image: linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 50%);
    pointer-events: none;
    `;
    el.appendChild(mask);
  },
};

//#####··········卡片扫光··········#####//
const sweepLight = {
  inserted(el, binding) {
    const auto = binding.value;
    const light = document.createElement("div");
    el.style.position = "relative";
    light.style.cssText = `
      position: absolute;
      top: 0px;
      left: 0px;
      width: ${el.offsetWidth / 5}px;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.25);
      transform: skewX(45deg) translateX(${el.offsetWidth * 1.25}px);
      transition: all 1s;
      filter: blur(5px)
    `;
    el.appendChild(light);
    if (auto) {
      light.style.transitionDelay = ` ${binding.value}s`;
      light.style.transform = `skewX(45deg) translateX(${
        -el.offsetWidth * 1.25
      }px)`;
    } else {
      el.addEventListener("mouseenter", () => {
        light.style.transform = `skewX(45deg) translateX(${
          -el.offsetWidth / 1.5
        }px)`;
      });

      el.addEventListener("mouseleave", () => {
        light.style.transform = `skewX(45deg) translateX(${
          el.offsetWidth * 1.25
        }px)`;
      });
    }
  },
};

//#####··········打字机··········#####//
const typewriter = {
  inserted(el) {
    let say = el.innerHTML;
    el.innerHTML = "";
    setTimeout(() => {
      let timer;
      let num = 0, //用于累加遍历字符串
        text = ""; //用于输出在屏幕上
      fn();
      function fn() {
        timer = setInterval(() => {
          text += say[num]; //遍历输出的文字
          el.innerHTML = text; //输出在屏幕上
          if ("，、。？！".includes(say[num])) {
            clearInterval(timer); //清除用于输出文字的计时器
            setTimeout(
              () => {
                fn();
              },
              "，" === say[num]
                ? 750
                : "、" === say[num]
                ? 250
                : "。" === say[num]
                ? 1500
                : "？！".includes(say[num])
                ? 1000
                : 750,
            );
          }
          num++;
          if (num == say.length) {
            //如果文字输出完毕
            clearInterval(timer); //清除用于输出文字的计时器
          }
        }, 100);
      }
    }, 750);
  },
};

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
  parallaxBg,
  particle,
  maskGradient,
  sweepLight,
  typewriter,
  textHoverColor,
};
export default {
  install(Vue) {
    Object.keys(directives).forEach((directive) => {
      Vue.directive(directive, directives[directive]);
    });
  },
};
