<template>
  <div class="container">
    <div class="menu">
      <my-menu />
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import MyMenu from './Menu.vue'
export default {
  name: 'Layout',
  components: { MyMenu },
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
.container {
  width: 1140px;
  margin: 0 auto;
  display: flex;
  .menu {
    width: 240px;
  }
  .content {
    flex: 1;
  }
}
</style>
