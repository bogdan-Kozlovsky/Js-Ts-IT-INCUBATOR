import React, {FC} from 'react'
import './counter.css'

type CounterTitlePropsType = {
    title: number
    max: number
    start: number
    error: number
    string: string
}

export const CounterTitle: FC<CounterTitlePropsType> = ({title, ...props}) => {
    return (
        <h1 style={title >= props.max ? {color: 'red'} : {color: 'black'}} className="counterTitle">
            {/*{props.error ? 'Press Set!!!' : props.start === title ? title : 'Press Set!!'}*/}
            {title}
        </h1>
    )
}