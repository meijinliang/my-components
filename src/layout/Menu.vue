<template>
  <div class="my-menu">
    <ul>
      <li
        v-for="item in menuList"
        :key="item.index"
        @click="handleClick(item)"
      >
        <a :class="{ 'is-active': currentIndex === item.index }">{{ item.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyMenu',
  data() {
    return {
      currentIndex: 0,
      menuList: [
        {
          label: 'Button 按钮',
          path: '/button',
          index: 1
        }
      ]
    }
  },
  watch: {
    '$route.path': {
      handler(val) {
        this.setCurrentIndex()
      }
    }
  },
  created() {
    this.setCurrentIndex()
  },
  methods: {
    setCurrentIndex() {
      const findData = this.menuList.find(x => x.path === this.$route.path)
      this.currentIndex = findData && findData.index || 0
    },
    handleClick(item) {
      if (item.path === this.$route.path) {
        return
      }
      this.$router.push({ path: item.path })
    }
  }
}
</script>

<style lang="scss" scoped>
.my-menu {
  padding: 20px 0px;
  li {
    cursor: pointer;
    a {
      display: block;
      height: 40px;
      color: #444;
      line-height: 40px;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 400;
      &:hover {
        outline: none;
        background-color: #ecf5ff;
      }
      &.is-active {
        color: #409eff;
      }
    }
  }
}
</style>
