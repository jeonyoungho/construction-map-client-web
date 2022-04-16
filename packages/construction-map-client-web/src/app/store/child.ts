// Created by jyh on 2022-04-06

import { action, computed, makeObservable, observable, override } from 'mobx';

class Parent {
  // not overridable
  observable1 = 0

  constructor() {
    makeObservable(this, {
      observable1: observable,
      computed1: computed,
      action1: action,
      arrowAction1: action
    })
  }

  // overridable
  get computed1() {
    return this.observable1 * 2
  }

  // overridable
  action1() {
    this.observable1++
  }

  // not overridable
  arrowAction1 = () => {}

  // workaround - not annotated - overridable
  overridableArrowAction1 = action(() => {})
}


// 부모를 확장했기때문에, 기존 메서드를 상속받는다.
class Child extends Parent {
  // new
  observable2 = 0

  constructor() {
    super();
    makeObservable(this, {
      // 상속받았지만, 이 자식 클래스에서 새로 선언하고 싶다! -> override 매핑하고, 이 클래스에서 다시 선언
      // action1: override,
      computed1: override,
      // new fields
      observable2: observable,
      computed2: computed,
      action2: action,
      arrowAction2: action
    })
  }

  // overrides
  get computed1() {
    return super.computed1 * 2
  }

  // overrides
  action1() {
    super.action1()
  }

  // workaround - not annotated - overrides
  overridableArrowAction1 = action(() => {})

  // new
  get computed2() {
    return super.computed1 * 2
  }

  // new
  action2() {
    super.action1()
  }

  // new
  arrowAction2 = () => {}
}

const child = new Child();

export default child;
