<template>
  <div>
    <slot
      :text="text"
      :start="start"
      :clearTimer="clearTimer"
      :disabled="disabled"
    ></slot>
  </div>
</template>
<script>
export default {
  name: "LybValidationCountdown",
  data() {
    return {
      disabled: false,
      text: "获取验证码",
      timer: null,
    };
  },
  methods: {
    start() {
      this.disabled = true;
      this.countDown = 10;
      this.text = `${this.countDown}秒后重新获取`;
      this.timer = setInterval(() => {
        this.countDown--;
        this.text = `${this.countDown}秒后重新获取`;
        if (this.countDown === 0) {
          clearInterval(this.timer);
          this.text = "重新获取验证码";
          this.disabled = false;
        }
      }, 1000);
    },
    //#####··········初始化··········#####//
    clearTimer() {
      clearInterval(this.timer);
      this.disabled = false;
      this.text = "获取验证码";
    },
  },
};
</script>
