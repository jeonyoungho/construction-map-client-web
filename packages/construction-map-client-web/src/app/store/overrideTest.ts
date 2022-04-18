// Created by jyh on 2022-04-07
import { action, makeObservable, observable, override } from 'mobx';

class OverrideTest {

  value = 1;

  constructor() {
    makeObservable(this, {
      value: observable,
      increase: action,
      decrease: action,
      clearData: action,
    })
  }

  increase() {
    this.value++;
    console.log("[OverrideTest] increase");
  }

  decrease() {
    this.value--;
  }

  clearData() {

  }
}

class ParentOverrideTest extends OverrideTest {

  value2 = 1;

  constructor() {
    super();
    makeObservable(this, {
      value2: observable,
      increase2: action,
      decrease2: action,
    })
  }

  increase() {
    this.value++;
    console.log("[Parent] invoked increase");
  }

  increase2() {
    this.value2++;
  }

  decrease2 = () => {
    this.value2--;
  }

  clearData() {
    this.value = 0;
  }
}

const parentOverrideTest = new ParentOverrideTest();

export default parentOverrideTest;

