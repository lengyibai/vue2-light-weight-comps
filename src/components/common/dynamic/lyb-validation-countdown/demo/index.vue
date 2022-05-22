<template>
  <div class="demoFull flex">
    <LybValidationCountdown>
      <template v-slot="{ text, start, disabled }">
        <button
          class="btn"
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
  background-color: transparent;
}
</style>
