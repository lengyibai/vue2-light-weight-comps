<template>
  <div class="demo demoFull flex">
    <LybDragSort :data="imgs" @sort-data="sortData" id="name">
      <template v-slot="{ item }">
        <div class="box" draggable="true">
          <img :src="item.src" />
        </div>
      </template>
    </LybDragSort>
    <h1>{{ arr }}</h1>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      imgs: [
        {
          name: "A",
          src: require("./img/a.png"),
        },
        {
          name: "B",
          src: require("./img/b.png"),
        },
        {
          name: "C",
          src: require("./img/c.png"),
        },
        {
          name: "D",
          src: require("./img/d.png"),
        },
        {
          name: "E",
          src: require("./img/e.png"),
        },
      ],
      arr: [],
    };
  },
  created() {
    this.sort();
  },
  methods: {
    sort() {
      this.arr = this.imgs.map((item) => {
        return item.name;
      });
    },
    sortData() {
      this.sort();
    },
  },
};
</script>
<style scoped lang="less">
.demo {
  flex-direction: column;
  background-color: #000;
  color: #fff;
  font-size: 2vw;
  h1 {
    -webkit-box-reflect: below 0px
      linear-gradient(transparent, transparent 25%, rgba(0, 0, 0, 0.3));
  }
  .box {
    width: 10vw;
    height: 10vw;
    margin: 12.5px;
    img {
      width: 100%;
      height: 100%;
      -webkit-box-reflect: below 0px
        linear-gradient(transparent, transparent 25%, rgba(0, 0, 0, 0.3));
    }
  }
}
</style>
