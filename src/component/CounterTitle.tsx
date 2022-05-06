import React, { FC } from "react";
import "./counter.css";

type CounterTitlePropsType = {
  titleValue: string;
  maxValue: number;
};

export const CounterTitle: FC<CounterTitlePropsType> = ({ titleValue, maxValue }) => (
  <h1
    style={+titleValue >= maxValue ? { color: "red" } : { color: "black" }}
    className="counterTitle"
  >
    {titleValue}
  </h1>
);
