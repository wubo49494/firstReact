// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'

// 2. 创建虚拟 DOM 元素
// 灵纹拷问：什么是虚拟 DOM
// 用 JS 对象的形式，来表示 DOM 和 DOM 之前的嵌套关系
// const mydiv = React.createElement('div', { id: 'test', title: 'div aaa' }, '这是一个div元素')



// HTML 是最优秀的标记语言
// 注意：在 JS 文件中，默认不能写这种 类似于 HTML ，会报错
// 可以使用 babel 来转换这些 JS 中的标签
// 大家注意： 这种在 JS 中，混合写入类似于 HTML 的语法，叫做 JSX 语法，符合 XML 规范 的 JS
const mydiv = <div id="mydiv" title="div aaa">这是一个div元素</div>



// 3. 调用 render 渲染
ReactDOM.render(mydiv, document.getElementById('app')) 