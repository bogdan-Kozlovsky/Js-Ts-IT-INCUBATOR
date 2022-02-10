import React, {ChangeEvent, useEffect, useState} from 'react';
import './counter.css'
import {Button} from './Button';
import {CounterTitle} from "./CounterTitle";


export const Counter = ({...props}) => {
    let [title, setTitle] = useState<any>(0)
    let [string, setString] = useState<string>('Press Set!!!')
    let [start, setStart] = useState<number>(0)
    let [max, setMax] = useState<number>(5)

    let [error, setError] = useState<number>(-1)

    // useEffect(() => {
    //     localStorage.setItem('titleValue', JSON.stringify(title))
    // }, [title])

    useEffect(() => {
        setError(error + 1)

    }, [max])


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
        localStorage.setItem('maxValue', JSON.stringify(max))
        localStorage.setItem('startValue', JSON.stringify(start))
        let minValue = localStorage.getItem('startValue')
        if (minValue) {
            setTitle(JSON.parse(minValue))
        }
        setError(0)
    }

    const onChangeMin = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle('Press Set!!!')
        // setString('Press Set!!!')
        setStart(+event.currentTarget.value)
    }

    const onChangeMax = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle('Press Set!!!')
        // setString('Press Set!!!')
        setMax(+event.currentTarget.value)
    }
    const increment = () => {


        // if(typeof title === 'number')
        setTitle(title + 1)
    }

    const close = () => {
        setTitle(0)
    }

    const disabledError = max <= start || max < 0 || start < 0

    return (
        <div className="counterWrapper">
            <CounterTitle title={title} max={max} start={start} error={error} string={string}/>
            <div className="counterWrapperBtn">
                <Button name={'inc'} callBack={() => increment()} disabled={disabledIncrement}/>
                <Button name={'reset'} callBack={() => close()} disabled={disabledClose}/>
            </div>
            <div>
                {max <= start || max < 0 || start < 0 ?
                    <div className='errorSpan'>data is incorrect</div> : null}
                <div
                    className={max <= start || max < 0 || start < 0 ? "errorClass" : 'normalClass'}>

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