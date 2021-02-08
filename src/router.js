/*
 * @Descripttion: 路由文件 
 * @version:
 * @@Company: DCIT-SH
 * @Author: Oneself
 * @Date: 2021-02-05 17:55:21
 * @LastEditors: Oneself
 * @LastEditTime: 2021-02-08 11:32:30
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
import IndexPages from './pages/index';
import NewsPages from './pages/news'

class RouterComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
        <React.Fragment>
          {/* 匹配路由  */}
          <Route path='/' exact component={IndexPages}></Route>
          <Route path='/news' component={NewsPages}></Route>

        </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}
export default RouterComponent;
