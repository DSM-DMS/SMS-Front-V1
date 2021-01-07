import {
  PosterAction,
  GET_CIRCLE_INFO_LIST,
  GET_CIRCLE_INFO_DETAIL,
  GET_WANTED_INFO_LIST,
  GET_WANTED_INFO_DETAIL,
  SET_ALL_FILTER,
  SET_WANTED_FILTER
} from "../../action/poster";
import {
  CircleDatailPage,
  CircleInfo,
  WantedInfo,
  WantedInfoDetail
} from "../../type/poster";

interface PosterState {
  wanted: {
    list: WantedInfo[];
    detail: WantedInfoDetail;
    field: string;
  };
  all: {
    list: CircleInfo[];
    detail: CircleDatailPage;
    field: string;
  };
}

const initialState: PosterState = {
  wanted: {
    list: [],
    detail: {
      club_concept: "",
      club_uuid: "",
      field: "",
      floor: 1,
      name: "",
      introduction: "",
      leader_uuid: "",
      link: "",
      location: "",
      logo_uri: "",
      member_uuids: [],
      end_period: "",
      recruit_concept: "",
      recruit_members: [],
      recruitment_uuid: "",
      start_period: "",
      members: []
    },
    field: ""
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
      name: "",
      members: []
    },
    field: ""
  }
};

const posterReducer = (
  state: PosterState = initialState,
  action: PosterAction
): PosterState => {
  switch (action.type) {
    case SET_ALL_FILTER: {
      return {
        ...state,
        all: {
          ...state.all,
          field: action.payload
        }
      };
    }
    case SET_WANTED_FILTER: {
      return {
        ...state,
        wanted: {
          ...state.wanted,
          field: action.payload
        }
      };
    }
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
    case GET_WANTED_INFO_DETAIL: {
      return {
        ...state,
        wanted: {
          ...state.wanted,
          detail: {
            ...state.wanted.detail,
            ...action.payload
          }
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default posterReducer;
