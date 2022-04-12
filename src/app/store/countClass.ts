// Created by jyh on 2022-04-04
import { action, makeAutoObservable, makeObservable, observable } from 'mobx';

class CountClass {
  number:number = 0;

  constructor() {
    makeObservable(this, {
      number: observable,
      increase: action,
      decrease: action,
      print: action.bound,
    })
    // makeAutoObservable(this);
  }

  increase = () => {
    this.number++;
  }

  decrease = () => {
    this.number--;
  }

  print() {
    console.log("number: " + this.number);
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

// setInterval(countClass.print, 1000);

export default countClass;

