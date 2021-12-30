import React, {FC} from 'react'
import './counter.css'

type CounterTitlePropsType = {
    title: number
}

export const CounterTitle: FC<CounterTitlePropsType> = ({title}) => {
    return (
        <h1 style={title >= 5 ? {color: 'red'} : {color: 'black'}} className="counterTitle">{title}</h1>
    )
}