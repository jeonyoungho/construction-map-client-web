// Created by jyh on 2022-03-28
import * as React from "react";
import s from "./app.less";
import { Person } from './sampleVM';

interface Props {

}

const App: React.FC<Props> = (props) => {
    console.log("render!", s);

    const person = new Person("jeon young ho");

    return (
        <div className={s.text}>{person.name}</div>
    );
};
export default App;
