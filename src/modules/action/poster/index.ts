import { CircleInfo, WantedInfo } from "../../type/poster";

export const UPDATE_POSTER_LIST = "poster/UPDATE_POSTER_LIST" as const;
export const UPDATE_POSTER_DETAIL = "poster/UPDATE_POSTER_DETAIL" as const;

export const GET_CIRCLE_INFO_LIST = "poster/GET_CIRCLE_INFO_LIST" as const;
export const GET_CIRCLE_INFO_LIST_SAGA = "poster/GET_CIRCLE_INFO_LIST_SAGA" as const;

export const GET_CIRCLE_INFO_DETAIL = "poster/GET_CIRCLE_INFO_DETAIL" as const;
export const GET_CIRCLE_INFO_DETAIL_SAGA = "poster/GET_CIRCLE_INFO_DETAIL_SAGA" as const;

export const GET_WANTED_INFO_LIST = "poster/GET_WANTED_INFO_LIST" as const;
export const GET_WANTED_INFO_LIST_SAGA = "poster/GET_WANTED_INFO_LIST_SAGA" as const;

export const getCircleInfoDetail = (payload: CircleInfo) => ({
  type: GET_CIRCLE_INFO_DETAIL,
  payload
});
export const getCircleInfoDetailSaga = () => ({
  type: GET_CIRCLE_INFO_DETAIL_SAGA
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

export const updatePosterList = (payload: any[]) => ({});
export const updatePosterDetail = (payload: any) => ({});
export const updatePosterListWanted = (payload: any) => ({});
export const updatePosterDetailWanted = (payload: any) => ({});

export type PosterAction = ReturnType<
  | typeof getCircleInfoList
  | typeof getCircleInfoListSaga
  | typeof getCircleInfoDetail
  | typeof getCircleInfoDetailSaga
  | typeof getWantedInfoList
  | typeof getWantedInfoListSaga
>;
