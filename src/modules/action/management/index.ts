import {
  ReqAddRecruitment,
  ReqEditRecruitment
} from "../../../lib/api/payloads/Club";
import { ManagementWantedDetail } from "../../reducer/management";

const GET_MANAGEMENT_WANTED_INFO = "management/GET_MANAGEMENT_WANTED_INFO" as const;
const GET_MANAGEMENT_WANTED_INFO_SAGA = "management/GET_MANAGEMENT_WANTED_INFO_SAGA" as const;

const EDIT_MANAGEMENT_WANTED_INFO_SAGA = "management/EDIT_MANAGEMENT_WANTED_INFO_SAGA" as const;
const POST_MANAGEMENT_WANTED_INFO_SAGA = "management/POST_MANAGEMENT_WANTED_INFO_SAGA" as const;
const DELETE_MANAGEMENT_WANTED_INFO_SAGA = "management/DELETE_MANAGEMENT_WANTED_INFO_SAGA" as const;

const SET_MANAGEMENT_WANTED_INFO = "management/SET_MANAGEMENT_WANTED_INFO" as const;

const setManagementWantedInfo = (wantedData: ReqAddRecruitment) => ({
  type: SET_MANAGEMENT_WANTED_INFO,
  payload: wantedData
});

const editManagementWantedInfoSaga = (data: ReqEditRecruitment) => ({
  type: EDIT_MANAGEMENT_WANTED_INFO_SAGA,
  payload: data
});

const postManagementWantedInfoSaga = (data: ReqAddRecruitment) => ({
  type: POST_MANAGEMENT_WANTED_INFO_SAGA,
  payload: data
});

const deleteManagementWantedInfoSaga = (uuid: string) => ({
  type: DELETE_MANAGEMENT_WANTED_INFO_SAGA,
  payload: uuid
});
const getManagementWantedInfo = (payload: ManagementWantedDetail) => ({
  type: GET_MANAGEMENT_WANTED_INFO,
  payload
});

const getManagementWantedInfoSaga = (payload: string) => ({
  type: GET_MANAGEMENT_WANTED_INFO_SAGA,
  payload
});

type ManagementAction = ReturnType<
  | typeof getManagementWantedInfo
  | typeof deleteManagementWantedInfoSaga
  | typeof getManagementWantedInfo
  | typeof getManagementWantedInfoSaga
  | typeof setManagementWantedInfo
>;

export const managementAction = {
  GET_MANAGEMENT_WANTED_INFO,
  GET_MANAGEMENT_WANTED_INFO_SAGA,
  EDIT_MANAGEMENT_WANTED_INFO_SAGA,
  POST_MANAGEMENT_WANTED_INFO_SAGA,
  DELETE_MANAGEMENT_WANTED_INFO_SAGA,
  SET_MANAGEMENT_WANTED_INFO
};

export const managementActionCreater = {
  getManagementWantedInfo,
  getManagementWantedInfoSaga,
  editManagementWantedInfoSaga,
  postManagementWantedInfoSaga,
  deleteManagementWantedInfoSaga,
  setManagementWantedInfo
};

export default ManagementAction;
