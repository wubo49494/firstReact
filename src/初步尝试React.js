// console.log('odaak') 
// console.log('122223')
// webpack-dev-server 打包好的 main.js 是托管到内存中，所以在项目根目录下看不到
// 但是，我们可以认为，在项目根目录中，有一个看不见得 main.js 


// 这两个导入的时候，接受的成员名称，必须这么写，
import React from 'react'   //创建组件、虚拟dom元素、生命周期
import ReactDOM from 'react-dom' // 把创建好的组件和虚拟DOM 放到页面上展示




//  2. 创建虚拟DOM元素
//  参数1. 创建的元素的类型、字符串、表示元素的名称
//  参数2. 是一个对象或者 null， 表示 当前这个DOM元素的属性
//  参数3。 子节点（包括 其他 虚拟DOM 获取 文本子节点）内容
//  参数4. 其他子节点
const myh1 = React.createElement('h1', null, '这是一个React创建的H1')

const mydiv = React.createElement('div', { id: 'test'}, '这是一个div', myh1)

 


// 3. 使用 ReactDOM 把虚拟 DOM 渲染到页面上
// 参数1. 要渲染的那个虚拟 DOM 元素
// 参数2. 指定页面上的一个容器
ReactDOM.render(mydiv, document.getElementById('app'))



// const Vm = new Vue({
//   data: {},
//   el: '#app',
//   methods: {}
// })