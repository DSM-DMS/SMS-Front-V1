import { AllCircleBoxType } from '../../../components/default/CircleBox/AllCircleBox';
import { CircleAllDetail } from '../../../containers/Circle/All/Detail/CircleAllDetailContainer';
import { WantedCircleBoxData } from '../../../components/default/CircleBox/WantedCircleBox';
import { CircleWantedDetail } from '../../../containers/Circle/Wanted/Detail/CircleWantedDetailContainer';

export const UPDATE_POSTER_LIST = 'poster/UPDATE_POSTER_LIST' as const;
export const UPDATE_POSTER_DETAIL = 'poster/UPDATE_POSTER_DETAIL' as const;

export const updatePosterList = (payload: AllCircleBoxType[]) => ({
  type: UPDATE_POSTER_LIST,
  payload,
});

export const updatePosterDetail = (payload: CircleAllDetail) => ({
  type: UPDATE_POSTER_DETAIL,
  payload,
});

export const UPDATE_POSTER_LIST_WANTED = 'poster/UPDATE_POSTER_LIST_WANTED' as const;
export const UPDATE_POSTER_DETAIL_WANTED = 'poster/UPDATE_POSTER_DETAIL_WANTED' as const;

export const updatePosterListWanted = (payload: WantedCircleBoxData[]) => ({
  type: UPDATE_POSTER_LIST_WANTED,
  payload,
});

export const updatePosterDetailWanted = (payload: CircleWantedDetail) => ({
  type: UPDATE_POSTER_DETAIL_WANTED,
  payload,
});

export type PosterAction =
  | ReturnType<typeof updatePosterList>
  | ReturnType<typeof updatePosterDetail>
  | ReturnType<typeof updatePosterListWanted>
  | ReturnType<typeof updatePosterDetailWanted>;
