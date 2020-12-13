import {
  CircleDatailPage,
  CircleInfo,
  WantedInfo,
  WantedInfoDetail
} from "../../type/poster";

export const UPDATE_POSTER_LIST = "poster/UPDATE_POSTER_LIST" as const;
export const UPDATE_POSTER_DETAIL = "poster/UPDATE_POSTER_DETAIL" as const;

export const GET_CIRCLE_INFO_LIST = "poster/GET_CIRCLE_INFO_LIST" as const;
export const GET_CIRCLE_INFO_LIST_SAGA = "poster/GET_CIRCLE_INFO_LIST_SAGA" as const;

export const GET_CIRCLE_INFO_DETAIL = "poster/GET_CIRCLE_INFO_DETAIL" as const;
export const GET_CIRCLE_INFO_DETAIL_SAGA = "poster/GET_CIRCLE_INFO_DETAIL_SAGA" as const;

export const GET_WANTED_INFO_LIST = "poster/GET_WANTED_INFO_LIST" as const;
export const GET_WANTED_INFO_LIST_SAGA = "poster/GET_WANTED_INFO_LIST_SAGA" as const;

export const GET_WANTED_INFO_DETAIL = "poster/GET_WANTED_INFO_DETAIL" as const;
export const GET_WANTED_INFO_DETAIL_SAGA = "poster/GET_WANTED_INFO_DETAIL_SAGA" as const;

export const getCircleInfoDetail = (payload: CircleDatailPage) => ({
  type: GET_CIRCLE_INFO_DETAIL,
  payload
});
export const getCircleInfoDetailSaga = (payload: string) => ({
  type: GET_CIRCLE_INFO_DETAIL_SAGA,
  payload
});

export const getCircleInfoList = (payload: CircleInfo[]) => ({
  type: GET_CIRCLE_INFO_LIST,
  payload
});
export const getCircleInfoListSaga = () => ({
  type: GET_CIRCLE_INFO_LIST_SAGA
});

export const getWantedInfoList = (payload: WantedInfo[]) => ({
  type: GET_WANTED_INFO_LIST,
  payload
});
export const getWantedInfoListSaga = () => ({
  type: GET_WANTED_INFO_LIST_SAGA
});

export const getWantedInfoDetail = (payload: WantedInfoDetail) => ({
  type: GET_WANTED_INFO_DETAIL,
  payload
});
export const getWantedInfoDetailSaga = (payload: string) => ({
  type: GET_WANTED_INFO_DETAIL_SAGA,
  payload
});

export const updatePosterList = (payload: any[]) => ({});
export const updatePosterDetail = (payload: any) => ({});
export const updatePosterListWanted = (payload: any) => ({});
export const updatePosterDetailWanted = (payload: any) => ({});

export const posterAction = {
  GET_CIRCLE_INFO_LIST,
  GET_CIRCLE_INFO_LIST_SAGA,
  GET_CIRCLE_INFO_DETAIL,
  GET_CIRCLE_INFO_DETAIL_SAGA,
  GET_WANTED_INFO_LIST,
  GET_WANTED_INFO_LIST_SAGA,
  GET_WANTED_INFO_DETAIL,
  GET_WANTED_INFO_DETAIL_SAGA
};

export const PosterActionCreater = {
  getCircleInfoList,
  getCircleInfoListSaga,
  getCircleInfoDetail,
  getCircleInfoDetailSaga,
  getWantedInfoList,
  getWantedInfoListSaga,
  getWantedInfoDetail,
  getWantedInfoDetailSaga
};

export type PosterAction = ReturnType<
  | typeof getCircleInfoList
  | typeof getCircleInfoListSaga
  | typeof getCircleInfoDetail
  | typeof getCircleInfoDetailSaga
  | typeof getWantedInfoList
  | typeof getWantedInfoListSaga
  | typeof getWantedInfoDetail
  | typeof getWantedInfoDetailSaga
>;
