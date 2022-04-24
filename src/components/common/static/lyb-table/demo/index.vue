<template>
  <div class="demo">
    <!-- :head 表头 :sort 将需要排序的属性的索引号写入数组 -->
    <LybTable
      :data="tableData"
      :head="['日期', '姓名', '地址', '操作']"
      :sort="[1, 2]"
      @sortChange="sortChange"
    >
      <!-- 表头插槽， #head0代表第一个 -->
      <template #head0>
        <span>本来是日期</span>
      </template>

      <!-- v-slot:body="{ data }" body为插槽名，data为当前行的数据 -->
      <template v-slot:body="{ data }">
        <!-- min-width 表格最小宽度 -->
        <LybTableColumn min-width="100">{{ data.date }}</LybTableColumn>
        <LybTableColumn min-width="100">{{ data.name }}</LybTableColumn>
        <LybTableColumn min-width="100">{{ data.address }}</LybTableColumn>
        <LybTableColumn min-width="45">
          <button>冻结</button>
        </LybTableColumn>
      </template>
    </LybTable>
  </div>
</template>
<script>
import LybTable from "../index.vue";
import LybTableColumn from "../lyb-table-column.vue";
export default {
  name: "demo",
  data() {
    return {
      tableData: [
        {
          date: "2022-04-22",
          name: "冷弋白",
          address: "四川自贡",
          bgColor: "rgba(192, 58, 43, 0.25)",
        },
        {
          date: "2022-04-23",
          name: "lengyibai",
          address: "四川德阳",
          bgColor: "rgba(39, 174, 95, 0.25)",
        },
        {
          date: "2022-04-24",
          name: "lyb",
          address: "四川成都",
          bgColor: "rgba(41, 127, 185, 0.25)",
        },
        {
          date: "2022-04-24",
          name: "张三",
          address: "四川成都",
        },
        {
          date: "2022-04-24",
          name: "张三",
          address: "四川成都",
        },
        {
          date: "2022-04-24",
          name: "张三",
          address: "四川成都",
        },
        {
          date: "2022-04-24",
          name: "张三",
          address: "四川成都",
        },
      ],
    };
  },
  components: { LybTable, LybTableColumn },
  methods: {
    sortChange(v) {
      console.warn("排序触发：", v);
    },
  },
};
</script>
<style scoped lang="less">
.demo {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
</style>
