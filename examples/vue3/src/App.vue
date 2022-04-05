<template>
  <Watermark :options="options" :visible="visible">
    <button @click="handleShow">显示</button>
    <button @click="handleHide">隐藏</button>
    <input placeholder="水印内容" @change="changeText" />
    <Content />
  </Watermark>
</template>

<script lang="ts">
import Content from './components/content.vue';
import { Watermark } from '@pansy/vue-watermark';
import { ref, reactive, defineComponent } from 'vue';

export default defineComponent({
  components: {
    Content,
    Watermark,
  },
  setup() {
    const visible = ref(true);
    const options = reactive({
      text: '测试水印',
    });

    const handleShow = () => {
      visible.value = true;
    };

    const handleHide = () => {
      visible.value = false;
    };

    const changeText = (e: Event) => {
      options.text = (e.target as HTMLInputElement).value;
    };

    return {
      visible,
      options,
      handleShow,
      handleHide,
      changeText,
    };
  },
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
