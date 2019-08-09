/*
  使用mockjs提供mock数据接口
*/

import Mock from 'mockjs'
import data from './data'

//返回goods的接口
Mock.mock('http://localhost:8080/goods', {code: 0, data: data.goods})

//返回ratings的接口
Mock.mock('http://localhost:8080/ratings', {code: 0, data: data.ratings})

//返回info的接口
Mock.mock('http://localhost:8080/info', {code: 0, data: data.info})
