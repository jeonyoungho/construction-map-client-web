import React from "react"
import s from "./title.less";

export interface TitleProps {
  text?: string
}

export const Title: React.FC<TitleProps> = ({text}) => {

  return <div className={s.text}>{ text }</div>
};
