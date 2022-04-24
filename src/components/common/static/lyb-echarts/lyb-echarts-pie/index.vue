<template>
  <div class="lyb-echarts-pie">
    <div
      ref="chart"
      :style="{ width: width, height: height, margin: margin }"
    ></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "LybEchartsPie",
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
    desc: {
      type: String,
      default: "不知名玩家",
    },
    data: {
      type: Array,
      default() {
        return [
          { name: "英雄联盟", value: 10 + 30 + 50 + 70 + 90 },
          { name: "刺激战场", value: 20 + 40 + 60 + 80 + 100 },
          { name: "我的世界", value: 10 + 40 + 70 + 100 + 130 },
          { name: "王者荣耀", value: 20 + 40 + 60 + 80 + 100 + 120 },
        ];
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
          subtext: this.desc,
          left: "left",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          right: "0",
        },
        series: [
          {
            name: "元素数量占比",
            type: "pie",
            radius: "75%",
            data: this.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>
<style scoped lang="less">
.lyb-echarts-pie {
  display: flex;
  justify-content: center;
}
</style>
