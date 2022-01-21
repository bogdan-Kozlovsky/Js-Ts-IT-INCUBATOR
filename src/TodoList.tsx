import React, {FC} from 'react'

type TodoListPropsType = {
    value: string
    onChange: (value: string) => void
}
export const TodoList: FC<TodoListPropsType> = (props) => {
    return (
        <div>
            <h1>{props.value ? `${props.value}` : 'not post!'}</h1>
            <input type="text" value={props.value} onChange={event => props.onChange(event.currentTarget.value)}/>

        </div>
    )
}