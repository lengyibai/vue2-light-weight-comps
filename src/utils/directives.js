// /* 修改文字 */
/*
const modify = {
  inserted(el, binding) {
    function edit() {
      el.removeEventListener('mouseenter', edit);
      const lyb = el.innerHTML;
      const input = document.createElement('textarea');
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
        input.style.height = input.scrollHeight + 'px';
      });
      input.addEventListener('input', e => {
        input.style.height = e.target.scrollHeight + 'px';
      });
      el.innerHTML = '';
      el.appendChild(input);
      input.focus();
      input.onblur = function () {
        const text = this.value || '空';
        el.innerHTML = text;
        el.addEventListener('mouseenter', edit);
        if (lyb === this.value) return;
        binding.value[0](text, binding.value[1] || 'value');
      };
    }
    el.addEventListener('mouseenter', edit);
  },
}; */
const modify = {
  inserted(el, binding) {
    const lyb = el.innerHTML;
    el.setAttribute("contenteditable", true);

    el.addEventListener("blur", () => {
      el.style.border = "none";
      if (lyb === el.innerHTML) return;
      const text = el.innerHTML || "无";
      el.innerHTML = text;
      binding.value[0](text, binding.value[1] || "value");
    });
    el.addEventListener("focus", () => {
      el.style.border = "1px solid #ccc";
    });
  },
};

/* 模态框 */
const move = {
  inserted(el) {
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
        moveX = e.pageX - x;
        moveY = e.pageY - y;
        el.style.left = `${moveX + startX}px`;
        el.style.top = `${moveY + startY}px`;
      }
      window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", fn);
      });
    });
  },
};

/* 点击按钮水波扩散效果 */
const diffuse = {
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
      const c = document.createElement("span");
      c.style.cssText = style;
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;
      c.style.left = x + "px";
      c.style.top = y + "px";
      this.appendChild(c);
      const width = e.target.offsetWidth;
      const height = e.target.offsetHeight;
      const size = width > height ? width : height;
      c.style.width = `${size * 4}px`;
      c.style.height = `${size * 4}px`;
      el.addEventListener("mouseup", () => {
        c.style.opacity = 0;
        setTimeout(() => {
          c.remove();
        }, 1000);
      });
    });
  },
};

/* 表格布局对齐方式 */
// ['right','left',true] true 表示显示边框，一般用于测试
const table = {
  inserted(el, { value }) {
    el.style.cssText = `
    border-collapse: collapse;
    `;
    [...el.querySelectorAll("td")].forEach((item, index) => {
      if (value[2]) item.style.border = "1px solid #000";
      item.style.wordBreak = "break-all";
      item.style.textAlign = index % 2 ? value[1] : value[0];
    });
  },
};

let directives = {
  modify,
  diffuse,
  table,
  move,
};
export default {
  install(Vue) {
    Object.keys(directives).forEach((directive) => {
      Vue.directive(directive, directives[directive]);
    });
  },
};
