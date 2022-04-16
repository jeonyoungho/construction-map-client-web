// Created by jyh on 2022-03-28
import React from "react";
import { Person } from './sampleVM';
import { observer } from 'mobx-react'
import store from "./store"
import { autorun } from "mobx";
import s from "./app.less";
import child from './store/child';
import actionTest from './store/actionTest';
import parentOverrideTest from './store/overrideTest';
import util from "../util/util"

interface Props {

}

const App: React.FC<Props> = observer((props) => {
    const person = new Person("jeon young ho");

    const { countClass, countObject, doubleClassAuto } = store;

    autorun(() => {
      if (doubleClassAuto.double) {
        console.log('Double' + doubleClassAuto.double)
      }
      if (doubleClassAuto.double === 8) {
        console.log('만약 value가 8이라면 0으로 초기화')
        doubleClassAuto.value = 0
      }
    })
    console.log("render! " + s.text);

    return (
        <div style={{padding: '50px'}}>
            <div className={s.text}>person name: {person.name}</div>
            <div>util value is {util.value}</div>
            <div style={{ marginBottom: '50px'}}>
                <h1>Count(Class)</h1>
                <div>number: {countClass.number}</div>
                <button onClick={() => countClass.increase()}>plus</button>
                <button onClick={() => countClass.decrease()}>minus</button>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <h1>Count (Object)</h1>
                <div>num: {countObject.num}</div>
                <button onClick={() => countObject.increase()}>increment</button>
            </div>

            <div>
              <h1>Computed</h1>
              <div>double number: {doubleClassAuto.value}</div>
              <button onClick={() => doubleClassAuto.increment()}>
                double increment
              </button>
            </div>

            <div>
              <h1>Child</h1>
              <div>observable2: {child.observable1}</div>
              <button onClick={() => child.action1()}>
                action2
              </button>
            </div>

            <div>
              <h1>Action Test</h1>
              <div>value: {actionTest.value}</div>
              <button onClick={() => actionTest.actionTest()}>
                doubleValue
              </button>
            </div>

            <div>
              <h1>Override Test</h1>
              <div>value: {parentOverrideTest.value}</div>
              {/*<div>value2: {parentOverrideTest.value2}</div>*/}
              <button onClick={() => parentOverrideTest.increase()}>
                increase value
              </button>

              <button onClick={() => parentOverrideTest.clearData()}>
                clearData
              </button>
            </div>
        </div>
    );
});
export default App;
