/*
 * @Descripttion: index页面
 * @version: 
 * @@Company: DCIT-SH
 * @Author: Oneself
 * @Date: 2021-02-08 11:00:05
 * @LastEditors: Oneself
 * @LastEditTime: 2021-02-08 13:03:04
 * @Statu: TODO: 
 */
import React, { Component } from 'react'
import css from  '../../assets/css/index/home.css'
console.log(css)
export class index extends Component {
    render() {
        return (
            <div class='app'>
                <div class={css['homer']}> index模块 </div>
            </div>
        )
    }
}

export default index
