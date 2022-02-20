import React, {ChangeEvent} from 'react';
import './counter.css'
import {Button} from './Button';
import {CounterTitle} from "./CounterTitle";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {
    errorAC,
    incrementAC,
    InitialStateType,
    maxValueChangeAC,
    minTitleAC,
    resetAC,
    startValueChangeAC
} from "../redux/coutnReducer";


export const Counter = ({...props}) => {
    const dispatch = useDispatch()


    const {titleValue, maxValue, minValue} = useSelector<AppStateType, InitialStateType>(state => state.counter)
    const disabledIncrement = +titleValue < maxValue ? false : true
    const disabledClose = +titleValue === maxValue ? false : true
    const disabledError = maxValue <= minValue || maxValue < 0 || minValue < 0


    const onClickIncrement = () => {
        dispatch(incrementAC(+titleValue))
    }
    const onClickReset = () => {
        dispatch(resetAC())
    }
    const onClickSetHandler = () => {
        dispatch(minTitleAC(minValue))
    }


    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(maxValueChangeAC(+e.currentTarget.value))
        dispatch(errorAC())
    }
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(startValueChangeAC(+e.currentTarget.value))
        dispatch(errorAC())
    }


    return (
        <div className="counterWrapper">
            <CounterTitle titleValue={titleValue} maxValue={maxValue} minValue={minValue}/>
            <div className="counterWrapperBtn">
                <Button name={'inc'} callBack={onClickIncrement} disabled={disabledIncrement}/>
                <Button name={'reset'} callBack={onClickReset} disabled={disabledClose}/>
            </div>
            <div>
                {maxValue <= minValue || maxValue < 0 || minValue < 0 ?
                    <div className='errorSpan'>data is incorrect</div> : null}
                <div
                    className={maxValue <= minValue || maxValue < 0 || minValue < 0 ? "errorClass" : 'normalClass'}>

                    <div className='formWrapper'>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <label style={{paddingBottom: '5px', display: 'inline-block'}}>
                                <span style={{
                                    display: 'inline-block',
                                    paddingRight: '10px',
                                    color: '#0008ff'
                                }}>Max:</span>
                                <input className='input' onChange={onChangeMaxValue} value={maxValue} type="number"/>
                            </label>
                            <label style={{display: 'block'}}>
                                <span style={{
                                    display: 'inline-block',
                                    paddingRight: '10px',
                                    color: '#0008ff'
                                }}>Min:</span>
                                <input className='input' onChange={onChangeMinValue} value={minValue} type="number"/>
                            </label>
                        </div>
                        <Button name={"set"} callBack={onClickSetHandler} disabled={disabledError}/>
                    </div>

                </div>
            </div>
        </div>
    )
}