/*
 * @Descripttion: 路由文件 
 * @version:
 * @@Company: DCIT-SH
 * @Author: Oneself
 * @Date: 2021-02-05 17:55:21
 * @LastEditors: Oneself
 * @LastEditTime: 2021-02-08 16:35:27
 * @Statu: TODO:
 */

/*router.js 页面里的代码
HashRouter:有#号
BrowserRouter:没有#号
Route：设置路由与组件关联
Switch:只要匹配到一个地址不往下匹配，相当于for循环里面的break
Link:跳转页面，相当于vue里面的router-link
exact :完全匹配路由
Redirect:路由重定向
*/

import React from "react";
// 路由react-router-dom 
import { HashRouter as Router,Route } from "react-router-dom";
//  页面路由 
import asyncComponents from './components/async/AsyncComponent';
const IndexComponent=asyncComponents(()=>import('./pages/index/index'));
const NewsComponent=asyncComponents(()=>import('./pages/news/index'));
const LayoutComponent=asyncComponents(()=>import('./pages/Layout/index'));
class RouterComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
        <React.Fragment>
          {/* 匹配路由  */}
          <Route path='/' exact component={LayoutComponent}></Route>
          <Route path='/index' component={IndexComponent}></Route>
          <Route path='/news' component={NewsComponent}></Route>
        </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}
export default RouterComponent;
