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
import { $random } from "@/utils/lyb.js";
let particle_timer = null;
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

    particle_timer = setInterval(() => {
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
      }, 50);
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
  unbind() {
    clearInterval(particle_timer);
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
    el.addEventListener("click", () => {
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
  inserted(el, binding) {
    const {
      color = "rgba(0, 0, 0, 0.75)",
      rotate = "0deg",
      num1 = "0%",
      num2 = "50%",
    } = binding.value || {};
    const mask = document.createElement("div");
    mask.style.cssText = `
    position: absolute;
    inset:0;
    background-image: linear-gradient(${rotate}, ${color} ${num1}, transparent ${num2});
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

//#####··········单行打字机··········#####//
const typewriterSingle = {
  inserted(el) {
    let lyb = el;
    let cursor_timer; //光标计时器，需要被其它函数调用，所以声明在全局作用域

    function cursor() {
      clearInterval(cursor_timer); //调用前清除光标计时器
      cursor_timer = setInterval(() => {
        lyb.classList.toggle("cursor"); //光标闪烁
      }, 500);
    }

    let say = lyb.innerHTML;
    function again() {
      lyb.innerHTML = "";
      let timer;
      let says = say; //用于删除
      let num = 0, //用于累加遍历字符串
        text = ""; //用于输出在屏幕上
      lyb.innerHTML = "";
      timer = setInterval(() => {
        clearInterval(cursor_timer); //禁止光标闪烁
        lyb.classList.add("cursor");
        text += say[num]; //遍历输出的文字
        lyb.innerHTML = text; //输出在屏幕上
        num++;

        if (num === say.length) {
          //如果文字输出完毕
          cursor(); //调用光标闪烁
          clearInterval(timer); //清除用于输出文字的计时器
          setTimeout(() => {
            //文字显示完三秒后
            clearInterval(cursor_timer); //禁止光标闪烁
            let delText_timer = setInterval(() => {
              //开始调用删除文字的计时器
              says = says.substr(0, says.length - 1); //逐个清除末尾文字
              lyb.innerHTML = says; //每次删除一个字，输出在屏幕上
              if (says.length <= 0) {
                //如果删除完毕
                clearInterval(delText_timer); //清除用于删除文字的计时器
                cursor(); //调用光标闪烁
                setTimeout(() => {
                  again(); //循环上面的过程
                }, 1000);
              }
            }, 100);
          }, 2000);
        }
      }, 150);
    }
    again();
  },
};

// //#####··········多行打字机··········#####//
const typewriterMultiple = {
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
        }, 150);
      }
    }, 750);
  },
};

//#####··········文字悬浮变色··········#####//
const textHoverColor = {
  inserted(el) {
    // 需要给父盒子加相对定位或绝对定位
    const mask = document.createElement("div");
    const line = document.createElement("div");
    console.log();
    mask.innerHTML = el.innerHTML;
    mask.style.cssText = `
    z-index: 9;
    position: absolute;
    top: 0;
    left: 0;
    color: transparent;
    background-color: #fff;
    transition: all 0.35s;
    -webkit-background-clip: text;
    clip-path: circle(75% at 50% 50%);
    `;
    const line_height = el.offsetHeight / 20;
    line.style.cssText = `
    z-index: 9;
    position: absolute;
    width: 0%;
    height: ${line_height}px;
    bottom: 0;
    color: transparent;
    background-color: #2980b9;
    transition: all 0.35s;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${line_height}px;
    `;
    window.addEventListener("resize", () => {
      const line_height = el.offsetHeight / 20;
      line.style.height = line_height + "px";
      line.style.borderRadius = line_height + "px";
    });

    el.appendChild(mask);
    el.appendChild(line);
    el.addEventListener("mouseenter", () => {
      mask.style.clipPath = "circle(0% at 50% 50%)";
      line.style.width = "100%";
    });
    el.addEventListener("mouseleave", () => {
      mask.style.clipPath = "circle(75% at 50% 50%)";
      line.style.width = "0%";
    });
  },
};

//#####··········樱花飘落··········#####//
const sakuraFalling = {
  inserted(el) {
    function $random(min, max, num = 0) {
      return parseFloat((Math.random() * (max - min) + min).toFixed(num));
    }

    document.styleSheets[0].insertRule(
      `
      @keyframes LybSakuraFalling {
        100% {
          transform: translateX(var(--right)) translateY(calc(100vh + 10px)) rotate(0);
        }
      }
      `,
      1, //代表插入索引位置，一般直接 document.styleSheets[0].length
    );

    const lyb = el;
    let particle = [];
    for (let i = 0; i < 100; i++) {
      particle.push('<div class="particle"></div>');
    }

    function update() {
      lyb.innerHTML = "";
      lyb.innerHTML = particle.join(" "); //join转换成字符串
      const particles = lyb.querySelectorAll(".particle");
      let right, top;
      particles.forEach((item) => {
        item.style.cssText = `
        --right: 100vw;
        --top: 0;
        position: absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 10px;
        animation: LybSakuraFalling 5s infinite linear;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        pointer-events: none;
        `;
        item.style.backgroundImage =
          "url(" + require("./img/" + $random(0, 4) + ".png") + ")";
        top = $random(0, document.documentElement.offsetHeight / 2);
        right = $random(0, document.documentElement.offsetWidth);

        if ($random(0, 2) <= 1) {
          item.style.transform = `translateX(${-right}px) translateY(-200%) rotate(${$random(
            0,
            360,
          )}deg)`;
          item.style.setProperty(
            "--right",
            $random(-right, -document.documentElement.offsetWidth - right) +
              "px",
          );
        } else {
          item.style.transform = `translateX(100%) translateY(${top}px) rotate(${$random(
            0,
            360,
          )}deg)`;
          item.style.setProperty(
            "--right",
            $random(-right, -document.documentElement.offsetWidth + right) +
              "px",
          );
        }
        // item.style.setProperty('--time', $random(3, 5, 1) + 's');
        item.style.animationDelay = $random(0, 10, 1) + "s";
      });
    }
    window.addEventListener("resize", function () {
      update();
    });
    update();
  },
};

//#####··········雪花飘落··········#####//
const snowFalling = {
  inserted(el) {
    function $random(min, max, num = 0) {
      return parseFloat((Math.random() * (max - min) + min).toFixed(num));
    }

    document.styleSheets[0].insertRule(
      `
      @keyframes LybSnowFalling {
        100% {
          transform: translateX(var(--left)) translateY(calc(100vh + 10px));
        }
      }
      `,
      1, //代表插入索引位置，一般直接 document.styleSheets[0].length
    );

    const lyb = el;
    let particle = [];

    for (let i = 0; i < document.documentElement.offsetWidth / 15; i++) {
      particle.push('<div class="particle"></div>');
    }

    function update() {
      lyb.innerHTML = "";
      lyb.innerHTML = particle.join(" "); //join转换成字符串
      const particles = lyb.querySelectorAll(".particle");
      let left, size;
      particles.forEach((item) => {
        size = $random(100, 200);
        item.style.cssText = `
        --left: 0;
        --top: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: ${document.documentElement.offsetWidth / size}px;
        height: ${document.documentElement.offsetWidth / size}px;
        animation: LybSnowFalling var(--time) infinite linear;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        pointer-events: none;
        background-color: #fff;
        border-radius: 50%;
        `;
        left = $random(0, document.documentElement.offsetWidth);

        item.style.transform = `translateX(${left}px) translateY(-200%)`;
        item.style.setProperty("--left", left + "px");
        item.style.setProperty("--time", $random(3, 5, 1) + "s");
        item.style.animationDelay = $random(0, 10, 1) + "s";
      });
    }
    window.addEventListener("resize", function () {
      update();
    });
    update();
  },
};

//#####··········图片压缩··········#####//
const imageOptimizer = {
  inserted(el, binding) {
    const {
      maxsize = 1024,
      ratio = 0.75,
      success = () => {},
      width = 1000,
    } = binding.value;
    el.addEventListener("change", function (e) {
      console.log();
      $imageOptimizer({
        el: e.target, //上传图片的input元素
        //file:f, //file类型的文件
        width, //压缩尺寸
        ratio, //压缩率
        maxsize, //超过多大进行压缩
        /* 成功回调 */
        success,
      });
    });
    function $imageOptimizer(obj) {
      // 先判断Dom树是否存在上次创建的canvas
      const c1 = document.createElement("canvas");
      c1.classList.add("imageOptimizer");
      document.body.appendChild(c1);
      const c2 = document.querySelector(".imageOptimizer");
      let files = "";
      let Blobs = "";
      let name = "";
      let ratio = obj.ratio || 1; //压缩率
      let maxsize = obj.maxsize || 1024; //超过多大进行压缩
      let width = obj.width || 10000; //压缩尺寸
      if (obj.el || obj.file) {
        files = (obj.el && obj.el.files[0]) || obj.file;
        name = files.name;
        let reader = new FileReader();
        reader.readAsDataURL(files);
        let p1 = new Promise(function (resolve, reject) {
          reader.onload = function (e) {
            resolve(e);
          };
          reader.onerror = function (e) {
            reject(e);
          };
        });
        p1.then(
          (e) => {
            let result = e.target.result;
            // 判断图片占用大小
            if (e.total / 1024 > maxsize) {
              let p2 = new Promise(function (resolve, reject) {
                let image = new Image();
                image.src = result;
                image.onload = function () {
                  resolve(image);
                };
                image.onerror = function (e) {
                  reject(e);
                };
              });
              p2.then(
                (e) => {
                  let canvas = document.querySelector("canvas");
                  let context = canvas.getContext("2d");
                  // 如果图片尺寸大于规定尺寸，则压缩尺寸
                  let scale = width / e.width;
                  if (scale < 1) {
                    canvas.width = e.width * scale;
                    canvas.height = e.height * scale;
                    context.drawImage(
                      e,
                      0,
                      0,
                      e.width * scale,
                      e.height * scale,
                    );
                  } else {
                    canvas.width = e.width;
                    canvas.height = e.height;
                    context.drawImage(e, 0, 0, e.width, e.height);
                  }
                  let dataUrl = canvas.toDataURL("image/jpeg", ratio);
                  Blobs = dataUrl;
                  let file = dataURLtoFile(Blobs, name);
                  obj.success(formData(file), file, Blobs, obj.el.files[0]);
                  c2.remove();
                },
                (e) => {
                  console.log(e);
                },
              );
            } else {
              let file = dataURLtoFile(result, name);
              obj.success(formData(file), file, result, obj.el.files[0]);
              c2.remove();
            }
          },
          (e) => {
            console.log(e);
          },
        );
      }

      function dataURLtoFile(dataurl, filename) {
        let arr = dataurl.split(","),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {
          type: mime,
        });
      }

      function formData(file) {
        const data = new FormData();
        data.append("file", file);
        return data;
      }
    }
  },
};

//#####··········按下拖动··········#####//
const downDrag = {
  inserted(el) {
    el.style.cursor = "move";
    let x = 0,
      y = 0,
      startX = 0,
      startY = 0,
      moveX = 0,
      moveY = 0;
    el.addEventListener("mousedown", (e) => {
      x = e.pageX;
      y = e.pageY;
      startX = el.offsetLeft;
      startY = el.offsetTop;
      window.addEventListener("mousemove", fn);
      function fn(e) {
        requestAnimationFrame(function () {
          moveX = e.pageX - x;
          moveY = e.pageY - y;
          el.style.left = `${moveX + startX}px`;
          el.style.top = `${moveY + startY}px`;
        });
      }
      window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", fn);
      });
    });
  },
};

//#####··········水波扩散··········#####//
const waveDiffuse = {
  inserted(el) {
    el.style.cssText = `
    position: relative;
    overflow: hidden;
    `;
    const style = `
      position: absolute;
      background-color: rgba(255, 255, 255, 0.5);
      transform: translate(-50%, -50%);
      pointer-events: none;
      border-radius: 50%;
      width: 0;
      height: 0;
      opacity: 0.5;
      transition: all 1s linear;
      `;
    el.addEventListener("mousedown", function (e) {
      console.log("点击了");
      const c = document.createElement("span");
      c.style.cssText = style;
      const x = e.clientX - e.target.getBoundingClientRect().left;
      const y = e.clientY - e.target.getBoundingClientRect().top;
      c.style.left = x + "px";
      c.style.top = y + "px";
      this.appendChild(c);
      const width = e.target.offsetWidth;
      const height = e.target.offsetHeight;
      const size = width > height ? width : height;
      c.style.width = `${size * 4}px`;
      c.style.height = `${size * 4}px`;
      function fn() {
        c.style.opacity = 0;
        setTimeout(() => {
          c.remove();
        }, 1000);
      }
      el.addEventListener("mouseup", fn);
      el.addEventListener("mouseleave", fn);
    });
  },
};

//#####··········表格布局对齐方式··········#####//
const tableLayout = {
  inserted(el, { value }) {
    el.style.cssText = `
    border-collapse: collapse;
    `;
    [...el.querySelectorAll("td")].forEach((item, index) => {
      if (value[2]) item.style.border = "1px solid red";
      item.style.wordBreak = "break-all";
      item.style.textAlign = index % 2 ? value[1] : value[0];
    });
  },
};

//#####··········高度等于宽度··········#####//
const equalRatio = {
  // value：倍数
  inserted(el, { value = 1 }) {
    update();
    function update() {
      el.style.height = el.offsetWidth * value + "px";
    }
    window.addEventListener("resize", function () {
      requestAnimationFrame(function () {
        update();
      });
    });
  },
};

//#####··········元素可编辑··········#####//
const modifyText = {
  inserted(el, binding) {
    function edit() {
      el.removeEventListener("click", edit);
      const lyb = el.innerHTML;
      const input = document.createElement("textarea");
      input.value = lyb;
      input.style.cssText = `
        width:${el.offsetWidth}px;
        height:${el.offsetHeight}px;
        color:#000;
        background-color:#fff;
        outline:none;
        border:none;
        resize:none;
        overflow:hidden;
      `;
      setTimeout(() => {
        input.style.height = input.scrollHeight + "px";
      });
      input.addEventListener("input", (e) => {
        input.style.height = e.target.scrollHeight + "px";
      });
      el.innerHTML = "";
      el.appendChild(input);
      input.focus();
      input.onblur = function () {
        const text = this.value || "空";
        el.innerHTML = text;
        el.addEventListener("click", edit);
        if (lyb === this.value) return;
        binding.value[0](text, binding.value[1] || "value");
      };
    }
    el.addEventListener("click", edit);
  },
};

let directives = {
  downDrag,
  imageOptimizer,
  maskGradient,
  parallaxBg,
  particle,
  sakuraFalling,
  snowFalling,
  sweepLight,
  textHoverColor,
  typewriterMultiple,
  typewriterSingle,
  waveDiffuse,
  tableLayout,
  equalRatio,
  modifyText,
};

import Vue from "vue";
Object.keys(directives).forEach((directive) => {
  Vue.directive(directive, directives[directive]);
});
