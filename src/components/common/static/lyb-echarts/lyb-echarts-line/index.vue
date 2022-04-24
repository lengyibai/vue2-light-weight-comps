<template>
  <div class="lyb-echarts-line">
    <div
      ref="chart"
      :style="{ width: width, height: height, margin: margin }"
    ></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "LybEchartsLine",
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
    users: {
      type: Array,
      default() {
        return [];
      },
    },
    // 底部单位
    bottomCompany: {
      type: Array,
      default() {
        return ["英雄联盟", "刺激战场", "我的世界", "王者荣耀"];
      },
    },
  },
  mounted() {
    this.drawLine();
  },
  destroyed() {},
  methods: {
    drawLine() {
      let myChart = echarts.init(this.$refs.chart, null, { renderer: "svg" });

      // 指定图表的配置项和数据
      let option = {
        title: {
          text: this.title,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: this.users,
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: "5%",
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: this.bottomCompany,
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [],
      };
      this.$set(
        option,
        "series",
        this.data.map((item) => {
          return {
            name: item.name,
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: item.time_data,
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
.lyb-echarts-line {
  display: flex;
  justify-content: center;
}
</style>
