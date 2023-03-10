<template>
  <div>
    <h1>Icon 图标</h1>
    <h3>图标集合</h3>
    <ul>
      <li v-for="(name, index) in icons" :key="index">
        <i :class="`el-icon-${name}`" />
        <span>el-icon-{{ name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import icons from './json/icon.json'
export default {
  name: 'DemoIcon',
  props: {

  },
  data() {
    return {
      icons
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  border: 1px solid #eaeefb;
  display: flex;
  flex-wrap: wrap;
  li {
    display: inline-block;
    width: 20%;
    height: 120px;
    color: #666;
    font-size: 13px;
    text-align: center;
    border-right: 1px solid #eaeefb;
    border-bottom: 1px solid #eaeefb;
    margin-right: -1px;
    margin-bottom: -1px;
    i {
      display: block;
      font-size: 32px;
      margin-top: 30px;
      margin-bottom: 15px;
      color: #606266;
      transition: color .15s linear;
    }
    &:hover {
      color: #5cb6ff;
      i {
        color: #5cb6ff;
      }
    }
  }
}
</style>
