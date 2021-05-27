/**
 * index.js 文件就是整个项目的store文件
 */

 import { createStore } from 'redux' // 引入 createStore方法
 import reducer from '@/redux/reducer' // 引入reducer
 
 const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 使浏览器中redux-devtool插件生效
   ) // 创建数据存储仓库
   
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import reducer from '@/redux/reducer' // 引入reducer
// const store = createStore(
//   reducer,
//   applyMiddleware(thunk)
// )

 export default store // 将仓库暴露出去