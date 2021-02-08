/*
 * @Descripttion:  入口文件
 * @version: 
 * @@Company: DCIT-SH
 * @Author: Oneself
 * @Date: 2021-02-05 17:55:21
 * @LastEditors: Oneself
 * @LastEditTime: 2021-02-08 13:56:12
 * @Statu: TODO: 
 */

/*eslint-disable*/
import React from 'react';
import ReactDOM from 'react-dom';
import RouterComponent from './router';
import reportWebVitals from './reportWebVitals';
// 公共css
import './assets/css/commit/public.scss'


function App(){
  return (
    <React.Fragment> 
      <RouterComponent></RouterComponent>
    </React.Fragment> 
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));

reportWebVitals();
