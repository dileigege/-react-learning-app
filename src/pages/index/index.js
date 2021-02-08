/*
 * @Descripttion: index页面
 * @version: 
 * @@Company: DCIT-SH
 * @Author: Oneself
 * @Date: 2021-02-08 11:00:05
 * @LastEditors: Oneself
 * @LastEditTime: 2021-02-08 16:19:35
 * @Statu: TODO: 
 */
import React, { Component } from 'react'
import { Button } from 'antd';
// import '../../assets/css/index/home.less'
import css from '../../assets/css/index/home.less';
console.log(css)

export class index extends Component {
    render() {
        return (
            <div className='app'>
                <Button type="primary">Primary Button</Button>
            </div>
        )
    }
}

export default index
