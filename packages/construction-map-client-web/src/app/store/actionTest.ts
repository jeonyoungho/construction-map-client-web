// Created by jyh on 2022-04-06
import { action, makeObservable, observable } from 'mobx';

function doubleValue(value: number) {
  value *= 2;
  console.log(`[doubleValue]: ${  value}`);
}

class ActionTest {

  value = 1;

  constructor() {
    makeObservable(this, {
      value: observable,
      increase: action,
      decrease: action,
      actionTest: action,
    })
  }

  increase = () => {
    this.value++;
  }

  decrease = () => {
    this.value--;
  }

  actionTest = () => {
    console.log(`before this.value: ${  this.value}`);
    this.double();
    console.log(`after this.value: ${  this.value}`);
  }

  double = () => {
    this.value *= 2;
    console.log(`[double]: ${  this.value}`);
  }
}



const actionTest = new ActionTest();
export default actionTest;
