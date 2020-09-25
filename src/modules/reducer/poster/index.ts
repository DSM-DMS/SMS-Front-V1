import { AllCircleBoxType } from '../../../components/default/CircleBox/AllCircleBox';
import {
  PosterAction,
  UPDATE_POSTER_LIST,
  UPDATE_POSTER_DETAIL,
  UPDATE_POSTER_LIST_WANTED,
  UPDATE_POSTER_DETAIL_WANTED,
} from '../../action/poster';
import { CircleAllDetail } from '../../../containers/Circle/All/Detail/CircleAllDetailContainer';
import { WantedCircleBoxData } from '../../../components/default/CircleBox/WantedCircleBox';
import { CircleWantedDetail } from '../../../containers/Circle/Wanted/Detail/CircleWantedDetailContainer';

interface PosterState {
  wanted: {
    list: WantedCircleBoxData[];
    detail: CircleWantedDetail;
  };
  all: {
    list: AllCircleBoxType[];
    detail: CircleAllDetail;
  };
}

const initialState: PosterState = {
  wanted: {
    list: [],
    detail: {
      name: '',
      introduce: '',
      date: '',
      leader: '',
      field: [],
      grade: [],
      where: '',
      imgSrc: '',
      peoples: {
        three: [],
        two: [],
        one: [],
      },
      tags: [],
      projects: [],
      comments: [],
    },
  },
  all: {
    list: [],
    detail: {
      imgSrc: '',
      introduce: '',
      leader: '',
      name: '',
      peoples: {
        one: [],
        two: [],
        three: [],
      },
      projects: [],
      tags: [],
      where: '',
    },
  },
};

const posterReducer = (
  state: PosterState = initialState,
  action: PosterAction,
): PosterState => {
  switch (action.type) {
    case UPDATE_POSTER_LIST: {
      return {
        ...state,
        all: {
          ...state.all,
          list: action.payload,
        },
      };
    }
    case UPDATE_POSTER_DETAIL: {
      return {
        ...state,
        all: {
          ...state.all,
          detail: action.payload,
        },
      };
    }
    case UPDATE_POSTER_LIST_WANTED: {
      return {
        ...state,
        wanted: {
          ...state.wanted,
          list: action.payload,
        },
      };
    }
    case UPDATE_POSTER_DETAIL_WANTED: {
      return {
        ...state,
        wanted: {
          ...state.wanted,
          detail: action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default posterReducer;
