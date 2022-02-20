import React, {FC} from 'react'
import './counter.css'

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled:boolean
}

export const Button: FC<ButtonPropsType> = ({name, callBack,disabled}) => {
    return (
        <button disabled={disabled} className={'btn'}  onClick={() => callBack()}>{name}</button>
    )
}