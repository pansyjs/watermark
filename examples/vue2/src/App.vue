<template>
  <Watermark :options="options" :visible="visible">
    <button @click="handleShow">显示</button>
    <button @click="handleHide">隐藏</button>
    <input placeholder="水印内容" @change="changeText" />
    <Content />
  </Watermark>
</template>

<script>
import Content from './components/content.vue';
import { Watermark } from '@pansy/vue-watermark';
import { defineComponent, ref } from '@vue/composition-api';
export default defineComponent({
  components: {
    Content,
    Watermark,
  },
  data() {
    return {
      visible: true,
      options: {
        text: '测试水印',
      }
    }
  },
  methods: {
    handleShow() {
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
    changeText(e) {
      this.options.text = e.target.value
    }
  }
});
</script>

<style scoped>
input {
  padding: 3px;
}

button {
  margin: 0 10px;
}
</style>
