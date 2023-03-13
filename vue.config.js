const { defineConfig } = require('@vue/cli-service')
const path = require('path')
// const fs = require('fs')
function resolve(dir) {
  console.log(__dirname, dir)
  return path.join(__dirname, dir)
}
// 生成scss源文件
// const req = require.context('./src/assets/styles/comSass', false, /\.scss$/)
// let indexContent = 'import "./base.scss";\n'
// req.keys().forEach(path => {
//   indexContent += 'import "' + path + '";\n'
// })
// fs.writeFileSync(resolve('src/assets/styles/index.scss'), indexContent)
module.exports = defineConfig({
  transpileDependencies: true
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': resolve('src')
  //     }
  //   }
  // }
})
