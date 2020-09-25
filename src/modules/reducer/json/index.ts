import JsonAction, { jsonAction } from '../../action/json';

type JsonState = any;

const jsonReducer = (state: JsonState = {}, action: JsonAction): JsonState => {
  switch (action.type) {
    case jsonAction.SET_JSON: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default jsonReducer;
