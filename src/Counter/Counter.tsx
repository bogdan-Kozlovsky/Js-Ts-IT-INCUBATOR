import React, {ChangeEvent, useEffect, useState} from 'react';
import './counter.css'
import {Button} from './Button';
import {CounterTitle} from "./CounterTitle";

type CounterPropsType = {
    title:any
    upperBound:any
}
export const Counter = ({...props}:CounterPropsType) => {


    // useEffect(() => {
    //     let startLocalValue = localStorage.getItem('startValue')
    //     if (startLocalValue) {
    //         setStart(JSON.parse(startLocalValue))
    //         setTitle(JSON.parse(startLocalValue))
    //     }
    //
    //     let maxLocalValue = localStorage.getItem('maxValue')
    //     if (maxLocalValue) {
    //         setMax(JSON.parse(maxLocalValue))
    //     }
    // }, [])


    // let [title, setTitle] = useState<any>(0)
    // const [max, setMax] = useState<any>(5)
    // // const [start, setStart] = useState<any>(0)
    // const [upperBound, setUpperBound] = useState<any>(5)
    // const [bottomBound, setBottomBound] = useState<any>(0)
    // useEffect(() => {
    //     localStorage.setItem('titleValue', JSON.stringify(title))
    // }, [props.title])
    //
    //
    //
    //
    //
    // const disabledIncrement = props.title < upperBound ? false : true
    // const disabledClose = props.title > 0 ? false : true


    // const onChangeMin = (event: ChangeEvent<HTMLInputElement>) => {
    //     setStart(event.currentTarget.value)
    // }
    //
    // const onChangeMax = (event: ChangeEvent<HTMLInputElement>) => {
    //     setMax(event.currentTarget.value)
    // }


    // const SetValueLocalState = () => {
    //     localStorage.setItem('startValue', (start))
    //     localStorage.setItem('maxValue', (max))
    //     setUpperBound(localStorage.getItem('maxValue'))
    //     setTitle(localStorage.getItem('startValue'))
    // }

    return (
        <div className="counterWrapper">
            <CounterTitle title={props.title} upperBound={props.upperBound}/>
        </div>
    )
}