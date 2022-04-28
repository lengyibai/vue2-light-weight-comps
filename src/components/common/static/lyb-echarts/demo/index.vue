<template>
  <div>
    <LybEchartsLine
      :title="line.title"
      :data="line.data"
      :bottomCompany="line.bottomCompany"
    />
    <LybEchartsBar />
    <LybEchartsPie />
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  },
  components: {},
  methods: {
    line: {
      title: "某玩家游戏熟练度",
      data: [
        { name: "英雄联盟", time_data: [10, 30, 50, 70, 90] },
        { name: "刺激战场", time_data: [20, 40, 60, 80, 100] },
        { name: "我的世界", time_data: [10, 40, 70, 100, 130] },
        { name: "王者荣耀", time_data: [20, 40, 60, 80, 100, 120] },
      ],
      bottomCompany: ["英雄联盟", "刺激战场", "我的世界", "王者荣耀"],
    },
  },
};
</script>
<style scoped lang="less">
.index {
  width: 100%;
  height: 100%;
}
</style>
