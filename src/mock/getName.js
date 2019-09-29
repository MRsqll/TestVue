import Mock from 'mockjs'
import { Random } from 'mockjs'

// 模拟假数据接口
Mock.mock("/api/getName",'get',function (option) {
  return Mock.mock({
    state: 200,
    message: "获取数据成功",
    'lastName': Random.cword( 1, 2 )
  })
})
