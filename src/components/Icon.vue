<template>
  <i :class="'el-icon-' + name" />
</template>

<script>
export default {
  name: 'MyIcon',
  props: {
    name: {
      type: String,
      required: true
    }
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

</style>
