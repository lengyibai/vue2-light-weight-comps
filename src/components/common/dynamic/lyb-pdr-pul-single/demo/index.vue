<template>
  <div class="demoFull">
    <lybPdrPulSingle
      class="scroll"
      @refreshing="refreshData1"
      @loading="addData1"
      themeColor="white"
      :status="status"
      ref="scroll"
      bottom="25px"
      top="25px"
    >
      <div class="content">
        <li
          v-for="(item, index) in data.list.flat(Infinity)"
          :key="index"
          ref="card"
        >
          {{ item.name }}
        </li>
      </div>
    </lybPdrPulSingle>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "demo",
  data() {
    return {
      data: { page: 1, list: [] },
      // 第一次请求状态，显示空状态或者请求错误
      status: "",
    };
  },
  methods: {
    //####········请求封装········####//
    getDataReq(page) {
      return new Promise((reslove, reject) => {
        axios
          .get("/movie/v1/filter/list", {
            params: {
              catid: 1,
              size: 35,
              pageno: page,
            },
          })
          .then((res) => {
            if (res.data.data != null) {
              this.data.list.push(
                res.data.data.movies.map((item) => {
                  return {
                    name: item.title,
                  };
                }),
              );
              // 向外传递请求成功
              reslove(true);
            } else {
              // 向外传递暂无更多
              reslove(null);
            }
          })
          .catch(() => {
            // 向外传递请求失败，多为网络或请求验证问题
            reject(false);
          });
      });
    },
    //####········下拉刷新········####//
    refreshData1() {
      this.data.page = 1;
      this.data.list = [];
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
    addData1() {
      let page = this.data.page;
      this.getDataReq(page)
        .then((status) => {
          // 上拉加载成功回调
          this.$refs.scroll.loadSuccess(status);
          this.data.page++;
          if (this.data.page == 3) this.data.page = 20;
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
