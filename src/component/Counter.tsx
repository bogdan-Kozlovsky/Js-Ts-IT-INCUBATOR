import React, { ChangeEvent } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  errorAC,
  incrementAC,
  InitialStateType,
  maxValueChangeAC,
  minTitleAC,
  resetAC,
  startValueChangeAC
} from "../redux/reducer/coutnReducer";
import { AppStateType } from "../redux/store";

import { Button } from "./Button";
import { CounterTitle } from "./CounterTitle";
import "./counter.css";

export const Counter = () => {
  const dispatch = useDispatch();
  const { titleValue, maxValue, minValue } = useSelector<AppStateType, InitialStateType>(
    state => state.counter
  );

  const disabledIncrement = maxValue <= +titleValue;
  const disabledReset = +titleValue !== maxValue;
  const zeroValue = 0;
  const disabledError =
    maxValue <= minValue || maxValue < zeroValue || minValue < zeroValue;

  const onClickIncrement = () => {
    dispatch(incrementAC(+titleValue));
  };
  const onClickReset = () => {
    dispatch(resetAC());
  };
  const onClickSetHandler = () => {
    dispatch(minTitleAC(minValue));
  };

  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(maxValueChangeAC(+e.currentTarget.value));
    dispatch(errorAC());
  };
  const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(startValueChangeAC(+e.currentTarget.value));
    dispatch(errorAC());
  };

  return (
    <div className="counterWrapper">
      <CounterTitle titleValue={titleValue} maxValue={maxValue} />

      <div className="counterWrapperBtn">
        <Button name="inc" callBack={onClickIncrement} disabled={disabledIncrement} />
        <Button name="reset" callBack={onClickReset} disabled={disabledReset} />
      </div>
      <div>
        {disabledError && <div className="errorSpan">data is incorrect</div>}
        <div className={disabledError ? "errorClass" : "normalClass"}>
          <div className="formWrapper">
            <div className="formWrapperBox">
              <label className="formWrapperLabel">
                <span className="formWrapperSpan">Max:</span>
                <input
                  className="input"
                  onChange={onChangeMaxValue}
                  value={maxValue}
                  type="number"
                />
              </label>
              <label className="formWrapperLabel">
                <span className="formWrapperSpan">Min:</span>
                <input
                  className="input"
                  onChange={onChangeMinValue}
                  value={minValue}
                  type="number"
                />
              </label>
            </div>
            <Button name="set" callBack={onClickSetHandler} disabled={disabledError} />
          </div>
        </div>
      </div>
    </div>
  );
};
