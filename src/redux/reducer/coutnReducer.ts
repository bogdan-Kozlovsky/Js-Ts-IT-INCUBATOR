// type
export type InitialStateType = {
  titleValue: string
  minValue: number
  maxValue: number
}
type GeneralType =
  | ReturnType<typeof incrementAC>
  | ReturnType<typeof resetAC>
  | ReturnType<typeof startValueChangeAC>
  | ReturnType<typeof maxValueChangeAC>
  | ReturnType<typeof minTitleAC>
  | ReturnType<typeof errorAC>

// initialState
export const initialState = {
  titleValue: "0",
  minValue: 0,
  maxValue: 10
};

// Reducer
export const counterReducer = (state: InitialStateType = initialState, action: GeneralType): InitialStateType => {
  switch (action.type) {
    case "INCREMENT": {
      const number = 1;
      return {
        ...state,
        titleValue: `${+action.payload.titleValue + number}`
      };
    }

    case "RESET":
      return {
        ...state,
        titleValue: `${state.minValue}`
      };
    case "START_VALUE_CHANGE":
      return {
        ...state,
        minValue: action.payload.newNumber
      };
    case "MAX_VALUE_CHANGE":
      return {
        ...state,
        maxValue: action.payload.newNumber

      };
    case "MIN_TITLE":
      return {
        ...state,
        titleValue: `${action.payload.newNumber}`
      };
    case "ERROR":
      return {
        ...state,
        titleValue: "PRESS SET!!!"
      };
    default:
      return state;
  }
};

// Action Creator
export const incrementAC = (titleValue: number) => ({
  type: "INCREMENT",
  payload: { titleValue }
} as const);
export const resetAC = () => ({
  type: "RESET"
} as const);
export const startValueChangeAC = (newNumber: number) => ({
  type: "START_VALUE_CHANGE",
  payload: { newNumber }
} as const);
export const maxValueChangeAC = (newNumber: number) => ({
  type: "MAX_VALUE_CHANGE",
  payload: { newNumber }
} as const);
export const minTitleAC = (newNumber: number) => ({
  type: "MIN_TITLE",
  payload: { newNumber }
} as const);
export const errorAC = () => ({
  type: "ERROR"
} as const);