import { CounterActions, DECREASE, INCREASE } from "../../action/counter";

interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0
};

const counterReducer = (
  state: CounterState = initialState,
  action: CounterActions
): CounterState => {
  switch (action.type) {
    case DECREASE:
      console.log("action/decrease");
      console.log(state);

      return { ...state, count: state.count - 1 };
    case INCREASE:
      console.log("action/increase");
      console.log(state);

      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

export default counterReducer;
