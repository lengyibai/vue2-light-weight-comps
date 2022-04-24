//判断是否为指定类型的文件链接
export function $urlFileType(url, type) {
  const obj = {
    image: ["jpeg", "jpg", "png", "webp", "bmp", "gif", "svg"],
    video: ["avi", "mov", "rmvb", "rm", "flv", "mp4", "3gp"],
  };
  if (type instanceof Array)
    return type.includes(url.replace(/.+\./, "").toLowerCase());
  return obj[type].includes(url.replace(/.+\./, "").toLowerCase());
}

//获取文件后缀名
export function $getFileSuf(str) {
  return str.replace(/.+\./, "").toLowerCase();
}

// 字节格式化
export function $fmtByte(bytes) {
  if (bytes == 0) return [0, "B", "0 B"];
  let k = 1024,
    size = 0,
    sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  size = (bytes / k ** i).toFixed(2) ? (bytes / k ** i).toFixed(2) : 0;
  return [size, sizes[i], `${size} ${sizes[i]}`];
}

export function $scrollPage(scrollEl, childCount) {
  //获取元素的高度,页面可视高度
  let viewHeight = document.documentElement.clientHeight;
  //获取滚动的页数
  let pageNum = childCount;
  //初始化当前位置
  let currentPosition = 0;
  //设置页面高度
  scrollEl.style.height = viewHeight + "px";

  // 向上向下的操作
  function goDown() {
    if (currentPosition > -viewHeight * (pageNum - 1)) {
      currentPosition = currentPosition - viewHeight;
      scrollEl.style.top = currentPosition + "px";
    }
  }

  function goUp() {
    if (currentPosition < 0) {
      currentPosition = currentPosition + viewHeight;
      scrollEl.style.top = currentPosition + "px";
    }
  }

  //防止用户多次滚动的延时,使用到了闭包
  function throttle(fn, delay) {
    let baseTime = 0;
    return function () {
      const currentTime = Date.now();
      if (baseTime + delay < currentTime) {
        fn.apply(this, arguments);
        baseTime = currentTime;
      }
    };
  }
  // 绑定事件  fireFox 的滑动事件不同,做出区别
  let handlerWheel = throttle(scrollMove, 1000);
  if (navigator.userAgent.toLowerCase().indexOf("fireFox") === -1) {
    scrollEl.addEventListener("mousewheel", handlerWheel);
  } else {
    scrollEl.addEventListener("DOMMouseScroll", handlerWheel);
  }

  function scrollMove(e) {
    if (e.deltaY > 0) {
      goDown();
    } else {
      goUp();
    }
  }
}
