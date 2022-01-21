import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from "./Button";
import {Counter} from "./Counter";

export const NewCounter = () => {

    useEffect(() => {
        let startLocalValue = localStorage.getItem('startValue')
        if (startLocalValue) {
            setStart(JSON.parse(startLocalValue))
            setTitle(JSON.parse(startLocalValue))
        }

        let maxLocalValue = localStorage.getItem('maxValue')
        if (maxLocalValue) {
            setMax(JSON.parse(maxLocalValue))
        }
    }, [])

    let [title, setTitle] = useState<any>(0)
    const [start, setStart] = useState<any>(0)
    const [max, setMax] = useState<any>(5)

    const onChangeMin = (event: ChangeEvent<HTMLInputElement>) => {
        setStart(event.currentTarget.value)
    }

    const onChangeMax = (event: ChangeEvent<HTMLInputElement>) => {
        setMax(event.currentTarget.value)
    }

    const increment = () => {
        setTitle(++title)
    }

    const close = () => {
        setTitle(0)
    }


    const [upperBound, setUpperBound] = useState<any>(5)
    const [bottomBound, setBottomBound] = useState<any>(0)
    useEffect(() => {
        localStorage.setItem('titleValue', JSON.stringify(title))
    }, [title])





    const disabledIncrement = title < upperBound ? false : true
    const disabledClose = title > 0 ? false : true


    const SetValueLocalState = () => {
        localStorage.setItem('startValue', (start))
        localStorage.setItem('maxValue', (max))
        setUpperBound(localStorage.getItem('maxValue'))
        setTitle(localStorage.getItem('startValue'))
    }
    return (
        <div>


            <Counter title={title} upperBound={upperBound}/>


            <div className="counterWrapperBtn">
                <Button name={'inc'} callBack={() => increment()} disabled={disabledIncrement}/>
                <Button name={'reset'} callBack={() => close()} disabled={disabledClose}/>
            </div>
            <div>
                <label>
                    max
                    <input onChange={onChangeMax} value={max} type="number"/>
                </label>
                <label>
                    min
                    <input onChange={onChangeMin} value={start} type="number"/>
                    <button onClick={SetValueLocalState}>set</button>
                </label>
            </div>
        </div>
    );
};

