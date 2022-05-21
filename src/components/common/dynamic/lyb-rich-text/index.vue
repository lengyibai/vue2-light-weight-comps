<template>
  <div class="lyb-rich-text" :class="{ disabled: disabled }">
    <quill-editor
      :disabled="disabled"
      :value="value"
      ref="myQuillEditor"
      :options="editorOption"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
  </div>
</template>
<script>
/* npm i vue-quill-editor@3.0.6 */
import { quillEditor, Quill } from "vue-quill-editor"; //调用编辑器
import { eeSourceBtn } from "./js/quill.eeSourceBtn.js";
Quill.register("modules/eeSourceBtn", eeSourceBtn);
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
  },
  components: {
    quillEditor,
  },
  data() {
    return {
      contentText: "",
      editorOption: {
        placeholder: "",
        modules: {
          eeSourceBtn: eeSourceBtn, // 引入我我们新增的事件
          toolbar: [
            ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
            ["blockquote", "code-block"], //引用，代码块
            [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
            [{ list: "ordered" }, { list: "bullet" }], //列表
            [{ script: "sub" }, { script: "super" }], // 上下标
            [{ indent: "-1" }, { indent: "+1" }], // 缩进
            [{ direction: "rtl" }], // 文本方向
            [{ size: ["small", false, "large", "huge"] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题
            [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
            [{ font: [] }], //字体
            [{ align: [] }], //对齐方式
            ["clean"], //清除字体样式
            ["image", "video"], //上传图片、上传视频
          ],
        },
      },
    };
  },
  watch: {
    content(v) {
      console.log(v);
      this.contentText = v;
    },
    contentText() {},
  },
  methods: {
    blur() {
      this.$emit("blur", this.contentText);
    },
    onEditorReady() {},
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange(e) {
      this.$emit("input", e.html);
    }, // 内容改变事件
  },
};
</script>
<style lang="less">
.quill-editor {
  display: flex;
  flex-direction: column;
  height: 100%;
  .ql-container {
    height: 100%;
    .ql-editor {
      height: 100%;
    }
  }
}

.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
  width: fit-content;
}
</style>
<style scoped>
.lyb-rich-text {
  width: 100%;
  height: 100%;
}
.disabled {
  cursor: not-allowed;
  pointer-events: none;
}

textarea {
  width: 100%;
}
</style>
