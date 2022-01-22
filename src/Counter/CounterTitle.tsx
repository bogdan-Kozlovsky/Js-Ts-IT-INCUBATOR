import React, {FC} from 'react'
import './counter.css'

type CounterTitlePropsType = {
    title: number
    max: number
}

export const CounterTitle: FC<CounterTitlePropsType> = ({title, ...props}) => {
    return (
        <h1 style={title >= props.max ? {color: 'red'} : {color: 'black'}} className="counterTitle">{title}</h1>
    )
}