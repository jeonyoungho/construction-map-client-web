// Created by jyh on 2022-03-28
import * as React from "react";
import { Person } from './sampleVM';
import { observer } from 'mobx-react'
import store from "./store/index"
import { autorun } from "mobx";

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
    // console.log("render!");

    return (
        <div style={{padding: '50px'}}>
            <div>person name: {person.name}</div>
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
        </div>
    );
});
export default App;
