<template>
  <div class="demoFull">
    <lybPdrPulSingle
      class="scroll"
      @refreshing="refreshData"
      @loading="addData"
      themeColor="white"
      :status="status"
      ref="scroll"
      bottom="25px"
      top="25px"
    >
      <div class="content">
        <li v-for="(item, index) in data" :key="index" ref="card">
          {{ item }}
        </li>
      </div>
    </lybPdrPulSingle>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      data: [],
      getData: [
        "廉颇",
        "小乔",
        "赵云",
        "墨子",
        "妲己",
        "嬴政",
        "孙尚香",
        "鲁班七号",
        "庄周",
        "刘禅",
        "高渐离",
        "阿轲",
        "钟无艳",
        "孙膑",
        "扁鹊",
        "白起",
        "芈月",
        "吕布",
        "周瑜",
        "夏侯惇",
        "甄姬",
        "曹操",
        "典韦",
        "宫本武藏",
        "李白",
        "马可波罗",
        "狄仁杰",
        "达摩",
        "项羽",
        "武则天",
        "老夫子",
        "关羽",
        "貂蝉",
        "安琪拉",
        "程咬金",
        "露娜",
        "姜子牙",
        "刘邦",
        "韩信",
        "王昭君",
        "兰陵王",
        "花木兰",
        "张良",
        "不知火舞",
        "娜可露露",
        "橘右京",
        "亚瑟",
        "孙悟空",
        "牛魔",
        "后羿",
        "刘备",
        "张飞",
        "李元芳",
        "虞姬",
        "钟馗",
        "成吉思汗",
        "杨戬",
        "雅典娜",
        "蔡文姬",
        "太乙真人",
        "哪吒",
        "诸葛亮",
        "黄忠",
        "大乔",
        "东皇太一",
        "干将莫邪",
        "鬼谷子",
        "铠",
        "百里守约",
        "百里玄策",
        "苏烈",
        "梦奇",
        "女娲",
        "明世隐",
        "公孙离",
        "杨玉环",
        "裴擒虎",
        "弈星",
        "狂铁",
        "米莱狄",
        "元歌",
        "孙策",
        "司马懿",
        "盾山",
        "伽罗",
        "沈梦溪",
        "李信",
        "上官婉儿",
        "嫦娥",
        "猪八戒",
        "盘古",
        "瑶",
        "云中君",
        "曜",
        "马超",
        "西施",
        "鲁班大师",
        "蒙犽",
        "镜",
        "蒙恬",
        "阿古朵",
        "夏洛特",
        "澜",
        "司空震",
        "艾琳",
        "云缨",
        "金蝉",
        "暃",
        "桑启",
        "戈娅",
      ],
      total: 0,
      page: 0,
      limit: 20,
      totalPage: 0,
      status: "", // 第一次请求状态，显示空状态或者请求错误
    };
  },
  created() {
    alert(
      "此页面需要通过手指滑动才能下拉刷新，打开F12，点击左上角有个模拟移动端访问的按钮，然后就可以鼠标按钮并滑动列表",
    );
    this.total = this.getData.length;
    this.totalPage = Math.floor(this.total / this.limit);
  },
  methods: {
    //####········请求封装········####//
    getDataReq(page) {
      const _this = this;
      return new Promise((reslove) => {
        setTimeout(() => {
          if (page <= _this.totalPage) {
            _this.data.push(...this.getData.splice(0, _this.limit));
          } else if (_this.getData.length) {
            _this.data.push(..._this.getData);
          }
          if (_this.getData.length) {
            reslove(true);
          } else {
            reslove(null);
          }
          console.log(this.data);
        }, 1000);
      });
    },
    //####········下拉刷新········####//
    refreshData() {
      console.warn("下拉刷新");
      this.page = 1;
      this.data = [];
      this.getDataReq(1)
        .then((res) => {
          // 刷新成功回调
          this.$refs.scroll.refreshSuccess(res);
        })
        .catch((err) => {
          // 刷新失败回调
          this.$refs.scroll.refreshSuccess(err);
        });
    },
    //####········上拉加载········####//
    addData() {
      console.warn("上拉加载");
      let page = this.page;
      this.getDataReq(page)
        .then((status) => {
          // 上拉加载成功回调
          this.$refs.scroll.loadSuccess(status);
          this.page++;
        })
        .catch((err) => {
          // 上拉加载失败回调
          this.$refs.scroll.loadSuccess(err);
        });
    },
  },
};
</script>
<style scoped lang="less">
.demoFull {
  overflow: hidden;
  .scroll {
    .content {
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        word-break: break-all;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        height: 100px;
        padding: 0 35px;
        color: #fff;
        list-style: none;
        font-size: 25px;
      }
    }
  }
}
</style>
