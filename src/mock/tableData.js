// 导入模拟假数据的包
import Mock from 'mockjs'
import { Random } from 'mockjs'

// 模拟假数据接口
Mock.mock("/api/getList",'get',function (option) {
  return Mock.mock({
    state: 200,
      message: "获取数据成功",
    'tableData|3': [
      {
        shopName: '@fruit()',
        shopPrice: '@natural(0,100)',
        buyNum: 0,
      }
    ]
  })
})
