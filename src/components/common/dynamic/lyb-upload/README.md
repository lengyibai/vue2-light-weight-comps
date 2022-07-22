# 文件上传

## 单文件

### props

| key      | value                                                        |
| -------- | ------------------------------------------------------------ |
| fileUrl  | 文件链接                                                     |
| fileName | 文件名，用于滚动显示                                         |
| id       | 当一个页面使用多个文件上传组件时，需要传`id`进行区分文本域   |
| url      | 上传文件的域名，一般直接在组件内配置                         |
| headers  | 头部信息                                                     |
| size     | 单个文件限制大小，单位为`MB`                                 |
| suffix   | 只能上传什么类型的文件，可传递字符串和数组，字符串只能传递`image`或`video`，这两个属性是内置的，代表只能上传图片或视频，传递数组则只能数组内后缀的文件，数组内为文件后缀名 |
| disabled | 是否禁用                                                     |

### $emit

| name     | value                                |
| -------- | ------------------------------------ |
| finish   | 返回后端返回的内容及上传失败的`fail` |
| progress | 数字，进度，单位`%`                  |

### 调用组件函数

| Function               |                                                              |
| ---------------------- | ------------------------------------------------------------ |
| this.$refs.xxx.clear() | 清空文件列表，用于表单重置，请不要直接修改原变量，如果正在上传，直接置空原变量并不会取消上传 |

# 使用组件

> 删除图片和上传完毕后会直接修改传递的变量

## 单

> 如果表单支持预览的情况下，需要设置`v-if`解决图片加载问题，不需要预览时可去掉

```vue
<LybUploadSingle v-if="files.url || isShow" :fileName="file.name" :fileUrl="file.url" />
<script>
export default {
  data(){
    return {
      file: {},
      isShow: false, //解决在既能预览，又能只需要上传，没有图片，导致无法显示组件
    }
  },
  //模拟异步请求
  mounted() {
    setTimeout(() => {
      this.isShow = true; //图片请求完毕后显示组件
      this.file = {
        url: 'https://lengyibai-img-bed.netlify.app/img/lyb.png',
        name: '冷弋白'
      };
    }, 1000);
  }
}
</script>
```

## 多

> 如果要预览，则需要按照特定格式传递：`[{ fileName: '', src: '' }]`

```vue
<LybUploadMultiple
  id="a"
  v-if="files.length || isShow"
  :files="files"
/>
<script>
export default {
  data() {
    return {
      files: [],
      isShow: false
    }
  },
  created() {
  	detail(id).then(res => {
      this.files = JSON.parse(res.data.data.files);
      this.isShow = true;
    });
	},
  methods:{
    release() {
      this.form.files = JSON.stringify(this.form.files);
    },
  },
}
</script>
```

