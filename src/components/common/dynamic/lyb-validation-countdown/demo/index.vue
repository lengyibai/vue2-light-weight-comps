<template>
  <div class="demoFull flex">
    <LybValidationCountdown>
      <template v-slot="{ text, start, disabled }">
        <button
          @click="start"
          :disabled="disabled"
          :style="{ cursor: disabled ? 'not-allowed' : 'pointer' }"
        >
          {{ text }}
        </button>
      </template>
    </LybValidationCountdown>
  </div>
</template>
<style scoped lang="less">
button {
  padding: 25px 50px;
  background-color: transparent;
  font-size: 50px;
  color: #fff;
  border: 3px solid #fff;
  transition: all 0.25s;
  &:hover {
    color: #000;
    background-color: #fff;
  }
}
</style>
