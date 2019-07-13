// 向外暴露一个打包的配置对象;  因为 Webpack 是基于Node构建的，所以 webpack 支持所有Node API 和语法
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'), // 源文件 也就是项目文件路径，硬盘路径，__direnmae = F://www/React/01day
  filename: 'index.html' // 生成的内存中的首页的名称
   
})



// 向外暴露一个打包的配置对象， 因为 webpack 是基于 Node 构建的，所以 webpack 支持所有的 Node API 和语法
// webpack 默认只能打包处理 .js 后缀名类型的文件，像 .png .vue 之类的文件无法主动处理， 所以要配置第三方的 loader， 类似于 css-loader, file-loader, babel-loader 等等
module.exports = {
  mode: 'development',
  // 再webpack 4.x 中，有一个很大的特性，就是约定大于配置，约定，默认的打包入口路径是 src -> index.js
  
  plugins: [   // 中括号 []
    htmlPlugin
  ],
  module: {
    // 所有第三方的 模块 配置的规则啊设置啊什么的都在这里
  }
}