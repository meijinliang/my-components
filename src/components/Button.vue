<template>
  <button
    class="my-button"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'my-button--' + type : '',
      buttonSize ? 'my-button--' + buttonSize : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
    @click="handleClick"
  >
    <i v-if="loading" class="el-icon-loading" />
    <i v-if="icon && !loading" :class="icon" />
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    // 类型
    type: {
      type: String,
      default: ''
    },
    buttonSize: {
      type: String,
      default: ''
    },
    // 原生type属性
    nativeType: {
      type: String,
      default: 'button'
    },
    // 是否加载状态中
    loading: Boolean,
    // 是否禁用状态
    disabled: Boolean,
    // 是否圆角按钮
    round: Boolean,
    // 是否圆形按钮
    circle: Boolean,
    plain: Boolean,
    // 是否默认聚焦
    autofocus: Boolean,
    icon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>
