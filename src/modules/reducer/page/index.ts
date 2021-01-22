import { PageAction, PAGE_MOVE, SUB_PAGE_MOVE } from '../../action/page/index';

export interface PageState {
  mainUrl: string;
  subUrl: string;
}

const pageReducer = (
  state: PageState = { mainUrl: '', subUrl: '' },
  action: PageAction,
): PageState => {
  switch (action.type) {
    case PAGE_MOVE: {
      return {
        ...state,
        mainUrl: action.payload,
      };
    }
    case SUB_PAGE_MOVE: {
      return {
        ...state,
        subUrl: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default pageReducer;
