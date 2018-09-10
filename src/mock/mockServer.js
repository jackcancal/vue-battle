/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'
import data_nav from './data_nav.json'
import home_data from './home_data.json'
import shiwu_data from './shiwu_data.json'
import categroy from './category'

// 返回data的接口
Mock.mock('/data', {code:0, data: data})
//返回首页轮播图片的接口
Mock.mock('/banner', {code:0, data: home_data.focusList})
//返回home页数据的接口
Mock.mock('/home', {code:0, data: home_data})
//返回识物页数据的接口
Mock.mock('/topic', {code:0, data: shiwu_data})
//返回分类页nav数据
Mock.mock('/nav', {code:0, data: data_nav})
//返回cate数据
Mock.mock('/cate', {code:0, data: categroy})

