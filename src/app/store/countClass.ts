// Created by jyh on 2022-04-04
import { action, makeObservable, observable } from 'mobx'

class CountClass {
  number: number = 0;

  constructor() {
    makeObservable(this, {
      number: observable,
      increase: action,
      decrease: action,
    })
  }

  increase = () => {
    this.number++;
  }

  decrease = () => {
    this.number--;
  }
}

// class Count {
//   number: number = 0
//
//   constructor() {
//     makeAutoObservable(this)
//   }
//
//   increase = () => {
//     this.number++
//   }
//   decrease = () => {
//     this.number--
//   }
// }

const countClass = new CountClass();
export default countClass;

