// Created by jyh on 2022-04-04
import { makeAutoObservable, makeObservable, observable, action, computed } from 'mobx'

class Doubler {
  value: number = 0;

  constructor(value: number) {
    // makeAutoObservable이 다른 action, computed를 자동으로 선언
    this.value = value;
    makeAutoObservable(this);
    // makeObservable(this, {
    //   value: observable,
    //   double: computed,
    //   increment: action,
    // })
  }

  get double() {
    return this.value * 2
  }

  increment() {
    this.value++
  }
}

const doubleClassAuto = new Doubler(1)
export default doubleClassAuto

