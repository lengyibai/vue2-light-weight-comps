<template>
  <div class="lyb-echarts-bar">
    <div
      ref="chart"
      :style="{ width: width, height: height, margin: margin }"
    ></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "LybEchartsBar",
  props: {
    width: {
      type: String,
      default: "75%",
    },
    height: {
      type: String,
      default: "500px",
    },
    margin: {
      type: String,
      default: "50px 0",
    },
    title: {
      type: String,
      default: "某玩家游戏熟练度",
    },
    data: {
      type: Array,
      default() {
        return [
          { name: "英雄联盟", time_data: [10, 30, 50, 70, 90] },
          { name: "刺激战场", time_data: [20, 40, 60, 80, 100] },
          { name: "我的世界", time_data: [10, 40, 70, 100, 130] },
          { name: "王者荣耀", time_data: [20, 40, 60, 80, 100, 120] },
        ];
      },
    },
    groups: {
      type: Array,
      default() {
        return ["英雄联盟", "刺激战场", "我的世界", "王者荣耀"];
      },
    },
    // 底部单位
    bottomCompany: {
      type: Array,
      default() {
        return ["2017", "2018", "2019", "2020", "2021"];
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let myChart = echarts.init(this.$refs.chart, null, { renderer: "svg" });

      // 指定图表的配置项和数据
      let option = {
        title: {
          text: this.title,
          top: 0,
          subtextStyle: {
            align: "center",
          },
        },
        // 悬浮显示框
        tooltip: {},
        legend: {
          data: this.users,
        },
        xAxis: {
          data: this.bottomCompany,
        },
        // 左边数据显示
        yAxis: {},
        // 显示的数据
        series: [],
      };

      this.$set(
        option,
        "series",
        this.data.map((item) => {
          return {
            name: item.name,
            // 柱状显示类型
            type: "bar",
            data: item.time_data,
            emphasis: {
              focus: "series",
            },
          };
        }),
      );
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>
<style scoped lang="less">
.lyb-echarts-bar {
  display: flex;
  justify-content: center;
}
</style>
