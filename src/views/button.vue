<template>
  <div>
    <h1>Button按钮</h1>
    <h3>基础用法</h3>
    <div>
      <my-button>默认按钮</my-button>
      <my-button type="primary">主要按钮</my-button>
      <my-button type="success">成功按钮</my-button>
      <my-button type="info">信息按钮</my-button>
      <my-button type="warning">警告按钮</my-button>
      <my-button type="danger">危险按钮</my-button>
    </div>
    <div class="mt16">
      <my-button plain>朴素按钮</my-button>
      <my-button type="primary" plain>主要按钮</my-button>
      <my-button type="success" plain>成功按钮</my-button>
      <my-button type="info" plain>信息按钮</my-button>
      <my-button type="warning" plain>警告按钮</my-button>
      <my-button type="danger" plain>危险按钮</my-button>
    </div>
    <div class="mt16">
      <my-button round>圆角按钮</my-button>
      <my-button type="primary" round>主要按钮</my-button>
      <my-button type="success" round>成功按钮</my-button>
      <my-button type="info" round>信息按钮</my-button>
      <my-button type="warning" round>警告按钮</my-button>
      <my-button type="danger" round>危险按钮</my-button>
    </div>
    <div class="mt16">
      <my-button disabled>默认按钮</my-button>
      <my-button type="primary" disabled>主要按钮</my-button>
      <my-button type="success" disabled>成功按钮</my-button>
      <my-button type="info" disabled>信息按钮</my-button>
      <my-button type="warning" disabled>警告按钮</my-button>
      <my-button type="danger" disabled>危险按钮</my-button>
    </div>
    <div class="mt16">
      <my-button :loading="true">默认按钮</my-button>
      <my-button type="primary" :loading="true">主要按钮</my-button>
      <my-button type="success" :loading="true">成功按钮</my-button>
      <my-button type="info" :loading="true">信息按钮</my-button>
      <my-button type="warning" :loading="true">警告按钮</my-button>
      <my-button type="danger" :loading="true">危险按钮</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from '@/components/Button.vue'
export default {
  name: 'ButtonDemo',
  components: { MyButton },
  props: {

  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.mt16 {
  margin-top: 16px;
}
</style>
