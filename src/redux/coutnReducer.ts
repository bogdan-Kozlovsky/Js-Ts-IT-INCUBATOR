import * as stream from "stream";

export type InitialStateType = {
    titleValue: string
    minValue: number
    maxValue: number
}
export const initialState = {
    titleValue: '0',
    minValue: 0,
    maxValue: 10
}

export const counterReducer = (state: InitialStateType = initialState, action: GeneralType): InitialStateType => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                titleValue: (+action.payload.titleValue + 1) + ''
            }
        case 'RESET':
            return {
                ...state,
                titleValue: '' + state.minValue
            }
        case 'START_VALUE_CHANGE':
            return {
                ...state,
                minValue: action.payload.newNumber
            }
        case 'MAX_VALUE_CHANGE':
            return {
                ...state,
                maxValue: action.payload.newNumber,

            }
        case 'MIN-TITLE':
            return {
                ...state,
                titleValue: '' + action.payload.newNumber
            }
        case 'ERROR':
            return {
                ...state,
                titleValue: 'PRESS SET!!!'
            }
        default:
            return state
    }
}

type GeneralType = IncrementACType
    | ResetACType
    | StartValueChangeACType
    | MaxValueChangeACType
    | minTitleACType
    | ErrorACType

type IncrementACType = ReturnType<typeof incrementAC>
export const incrementAC = (titleValue: number) => {
    return {
        type: 'INCREMENT',
        payload: {
            titleValue
        }
    } as const
}

type ResetACType = ReturnType<typeof resetAC>
export const resetAC = () => {
    return {
        type: 'RESET',

    } as const
}

type StartValueChangeACType = ReturnType<typeof startValueChangeAC>
export const startValueChangeAC = (newNumber: number) => {
    return {
        type: 'START_VALUE_CHANGE',
        payload: {newNumber}
    } as const
}
type MaxValueChangeACType = ReturnType<typeof maxValueChangeAC>
export const maxValueChangeAC = (newNumber: number) => {
    return {
        type: 'MAX_VALUE_CHANGE',
        payload: {newNumber}
    } as const
}
type minTitleACType = ReturnType<typeof minTitleAC>
export const minTitleAC = (newNumber: number) => {
    return {
        type: 'MIN-TITLE',
        payload: {newNumber}
    } as const
}
type ErrorACType = ReturnType<typeof errorAC>
export const errorAC = () => {
    return {
        type: 'ERROR',
    } as const
}