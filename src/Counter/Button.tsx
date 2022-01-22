import React, {FC} from 'react'
import './counter.css'

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled:boolean
}

export const Button: FC<ButtonPropsType> = ({name, callBack,disabled}) => {

    const onClickHandler = () => {
        callBack()
    }

    return (
        <button disabled={disabled} className={'btn'}  onClick={onClickHandler}>{name}</button>
    )
}