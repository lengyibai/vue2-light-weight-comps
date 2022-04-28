<template>
  <div>
    <LybEchartsLine
      :title="line.title"
      :data="line.data"
      :bottomCompany="line.bottomCompany"
    />
    <LybEchartsBar
      :title="bar.title"
      :data="bar.data"
      :groups="bar.groups"
      :bottomCompany="bar.bottomCompany"
    />
    <LybEchartsPie
      :title="pie.title"
      :data="pie.data"
      :bottomCompany="pie.bottomCompany"
    />
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
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
      bar: {
        title: "某玩家游戏熟练度",
        data: [
          { name: "英雄联盟", time_data: [10, 30, 50, 70, 90] },
          { name: "刺激战场", time_data: [20, 40, 60, 80, 100] },
          { name: "我的世界", time_data: [10, 40, 70, 100, 130] },
          { name: "王者荣耀", time_data: [20, 40, 60, 80, 100, 120] },
        ],
        groups: ["英雄联盟", "刺激战场", "我的世界", "王者荣耀"],
        bottomCompany: [],
      },
      pie: {
        title: "某玩家游戏熟练度",
        desc: "不知名玩家",
        data: [
          { name: "英雄联盟", value: 10 + 30 + 50 + 70 + 90 },
          { name: "刺激战场", value: 20 + 40 + 60 + 80 + 100 },
          { name: "我的世界", value: 10 + 40 + 70 + 100 + 130 },
          { name: "王者荣耀", value: 20 + 40 + 60 + 80 + 100 + 120 },
        ],
      },
    };
  },
  components: {},
  methods: {},
};
</script>
<style scoped lang="less">
.index {
  width: 100%;
  height: 100%;
}
</style>
