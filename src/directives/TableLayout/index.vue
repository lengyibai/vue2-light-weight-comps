<template>
  <div class="demoFull flex">
    <table class="table" v-tableLayout="['right', 'left', true]">
      <tr>
        <td>QQ：</td>
        <td>
          <input type="text" />
        </td>
      </tr>
      <tr>
        <td>密码：</td>
        <td>
          <input type="text" />
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "TableLayout",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.table {
  width: 300px;
  max-width: 100vh;
  height: fit-content;
  border-collapse: collapse;
  color: #fff;
  th,
  td {
    input {
      border: none;
      border-bottom: 1px solid #fff;
    }
  }
}
</style>
