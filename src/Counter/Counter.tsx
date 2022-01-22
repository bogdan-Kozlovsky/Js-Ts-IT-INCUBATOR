import React, {ChangeEvent, useEffect, useState} from 'react';
import './counter.css'
import {Button} from './Button';
import {CounterTitle} from "./CounterTitle";


export const Counter = ({...props}) => {
    let [title, setTitle] = useState<any>(0)
    let [start, setStart] = useState<any>(0)
    let [max, setMax] = useState<any>(5)


    let [error, setError] = useState<boolean>(false)
    let [changesMod, setChangesMod] = useState<boolean>(false)


    useEffect(() => {
        localStorage.setItem('titleValue', JSON.stringify(title))
    }, [title])


    useEffect(() => {
        let minValue = localStorage.getItem('startValue')
        if (minValue) {
            setTitle(JSON.parse(minValue))
            setStart(JSON.parse(minValue))
        }
    }, [])

    const disabledIncrement = title < max ? false : true


    const disabledClose = title === max ? false : true


    const onClickSetHandler = () => {
        localStorage.setItem('maxValue', max)
        localStorage.setItem('startValue', start)
        let minValue = localStorage.getItem('startValue')
        if (minValue) {
            setTitle(JSON.parse(minValue))
        }
    }

    const onChangeMin = (event: ChangeEvent<HTMLInputElement>) => {
        setStart(event.currentTarget.value)
        setTitle('press set')
    }

    const onChangeMax = (event: ChangeEvent<HTMLInputElement>) => {
        setMax(event.currentTarget.value)
        setTitle('press set')
    }
    const increment = () => {
        setTitle(++title)
    }

    const close = () => {
        setTitle(0)
    }

    const disabledError = max === start || max <= 0 || start < 0 || start >= max

    return (
        <div className="counterWrapper">
            <CounterTitle title={title} max={max}/>
            <div className="counterWrapperBtn">
                <Button name={'inc'} callBack={() => increment()} disabled={disabledIncrement}/>
                <Button name={'reset'} callBack={() => close()} disabled={disabledClose}/>
            </div>
            <div>
                {max === start || max <= 0 || start < 0 || start >= max ?
                    <div className='errorSpan'>data is incorrect</div> : null}
                <div
                    className={max === start || max <= 0 || start < 0 || start >= max ? "errorClass" : 'normalClass'}>

                    <div className='formWrapper'>


                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <label style={{paddingBottom: '5px', display: 'inline-block'}}>
                                <span style={{
                                    display: 'inline-block',
                                    paddingRight: '10px',
                                    color: '#0008ff'
                                }}>Max:</span>
                                <input className='input' onChange={onChangeMax} value={max} type="number"/>
                            </label>
                            <label style={{display: 'block'}}>
                                <span style={{
                                    display: 'inline-block',
                                    paddingRight: '10px',
                                    color: '#0008ff'
                                }}>Min:</span>
                                <input className='input' onChange={onChangeMin} value={start} type="number"/>
                            </label>
                        </div>
                        <Button name={"set"} callBack={onClickSetHandler} disabled={disabledError}/>
                    </div>

                </div>
            </div>
        </div>
    )
}