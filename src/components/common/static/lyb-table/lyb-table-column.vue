<template>
  <td :style="{ minWidth: minWidth + 'px' }">
    <slot></slot>
  </td>
</template>
<script>
export default {
  props: {
    minWidth: {
      type: String,
      default: "0",
    },
  },
  name: "LybTableColumn",
};
</script>
