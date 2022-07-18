function scrollRepeat(obj) {
  let {
    el,
    son,
    father = document.documentElement,
    into = 0.5,
    time = 0.5,
    animate,
  } = obj;
  function fn(el, son, i) {
    let a =
      father.clientHeight -
      el.clientHeight * (animate.names[i].into ? animate.names[i].into : into) -
      el.getBoundingClientRect().top;
    son.style.transition = `all ${
      animate.names[i].time ? animate.names[i].time : time
    }s`;
    if (a > 0) {
      son.style.transform = null;
      son.style.opacity = 1;
    } else if (
      a <
      -el.clientHeight * (animate.names[i].into ? animate.names[i].into : into)
    ) {
      son.style.transition = `all 0s`;
      son.style.opacity = 0;
      animate.name(son);
      if (animate.names[i].name) {
        animate.names[i].name(son);
      }
    }
  }
  if (el instanceof Array) {
    el.forEach((item, index) => {
      fn(item, son[index], index);
    });
  } else {
    fn(el, son);
  }
}
