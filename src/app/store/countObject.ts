// Created by jyh on 2022-04-04
import { observable } from 'mobx'

const countObject = observable({
  // 헷갈릴 수 있으니 num으로 작명
  num: 0,
  increase() {
    this.num++
  },
  decrease() {
    this.num--
  },
})

export default countObject

