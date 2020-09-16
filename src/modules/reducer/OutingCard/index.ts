import {
  OutingCardAction,
  UPDATE_OUTING_CARD_LIST,
  UPDATE_OUTING_CARD_MODAL,
} from '../../action/outingCard';
import { OutingCard } from '../../action/outingCard';

interface OutingCardState {
  list: OutingCard[];
  id: number;
}
const initialState: OutingCardState = {
  list: [],
  id: 0,
};

const OutingCardReducer = (
  state: OutingCardState = initialState,
  action: OutingCardAction,
): OutingCardState => {
  switch (action.type) {
    case UPDATE_OUTING_CARD_LIST: {
      return {
        ...state,
        list: action.payload,
      };
    }
    case UPDATE_OUTING_CARD_MODAL: {
      return {
        ...state,
        id: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default OutingCardReducer;
