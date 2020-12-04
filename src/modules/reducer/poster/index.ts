import {
  PosterAction,
  GET_CIRCLE_INFO_LIST,
  GET_CIRCLE_INFO_DETAIL,
  GET_WANTED_INFO_LIST
} from "../../action/poster";
import { CircleWantedDetail } from "../../../containers/Circle/Wanted/Detail/CircleWantedDetailContainer";
import { CircleInfo, WantedInfo } from "../../type/poster";

interface PosterState {
  wanted: {
    list: WantedInfo[];
    detail: CircleWantedDetail;
  };
  all: {
    list: CircleInfo[];
    detail: CircleInfo;
  };
}

const initialState: PosterState = {
  wanted: {
    list: [],
    detail: {
      name: "",
      introduce: "",
      date: "",
      leader: "",
      field: [],
      grade: [],
      where: "",
      imgSrc: "",
      peoples: {
        three: [],
        two: [],
        one: []
      },
      tags: [],
      projects: [],
      comments: []
    }
  },
  all: {
    list: [],
    detail: {
      club_concept: "",
      club_uuid: "",
      field: "",
      floor: 0,
      introduction: "",
      leader_uuid: "",
      link: "",
      location: "",
      logo_uri: "",
      member_uuids: [],
      name: ""
    }
  }
};

const posterReducer = (
  state: PosterState = initialState,
  action: PosterAction
): PosterState => {
  switch (action.type) {
    case GET_CIRCLE_INFO_LIST: {
      return {
        ...state,
        all: {
          ...state.all,
          list: action.payload
        }
      };
    }
    case GET_CIRCLE_INFO_DETAIL: {
      return {
        ...state,
        all: {
          ...state.all,
          detail: action.payload
        }
      };
    }
    case GET_WANTED_INFO_LIST: {
      return {
        ...state,
        wanted: {
          ...state.wanted,
          list: action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default posterReducer;
