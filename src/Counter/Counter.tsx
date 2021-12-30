import React, {useState} from 'react';
import './counter.css'
import {CounterTitle} from './CounterTitle';
import {Button} from './Button';

export const Counter = () => {

    let [title, setTitle] = useState(0)

    const increment = () => {
        setTitle(++title)
    }

    const close = () => {
        setTitle(0)
    }


    const disabledIncrement = title < 5 ? false : true
    const disabledClose = title > 0 ? false : true

    return (
        <div className="counterWrapper">
            <CounterTitle title={title}/>
            <div className="counterWrapperBtn">
                <Button name={'inc'} callBack={() => increment()} disabled={disabledIncrement}/>
                <Button name={'reset'} callBack={() => close()} disabled={disabledClose}/>
            </div>
        </div>
    )
}