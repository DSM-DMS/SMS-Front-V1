import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { call, getContext, put, takeEvery } from "redux-saga/effects";
import { apiDefault } from "../../../lib/api/client";
import { getClubUuid } from "../../../lib/api/club";
import { errorHandler } from "../../../lib/utils";
import {
  managementAction,
  managementActionCreater
} from "../../action/management";
import { ManagementWantedDetail } from "../../reducer/management";
import { CircleInfo, WantedInfo } from "../../type/poster";

function* getManagementWantedInfoSaga(
  action: ReturnType<typeof managementActionCreater.getManagementWantedInfoSaga>
) {
  try {
    const res = yield call(getClubUuid, action.payload);
    const { club_uuid } = res.data;

    try {
      const res2: AxiosResponse<CircleInfo> = yield call(
        apiDefault().get,
        `/clubs/uuid/${club_uuid}`
      );

      try {
        const res3: AxiosResponse<{ recruitment_uuid: string }> = yield call(
          apiDefault().get,
          `/clubs/uuid/${club_uuid}/recruitment-uuid`
        );

        const res4: AxiosResponse<WantedInfo> = yield call(
          apiDefault().get,
          `/recruitments/uuid/${res3.data.recruitment_uuid}`
        );

        const data: ManagementWantedDetail = { ...res2.data, ...res4.data };

        yield put(managementActionCreater.getManagementWantedInfo(data));
      } catch (err) {
        const wantedData: WantedInfo = {
          club_uuid: "",
          end_period: "",
          recruit_concept: "",
          recruit_members: [],
          recruitment_uuid: "",
          start_period: ""
        };
        yield put(
          managementActionCreater.getManagementWantedInfo({
            ...wantedData,
            ...res2.data
          })
        );
      }
    } catch (err) {}
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
}

function* postManagementWantedInfo(
  action: ReturnType<
    typeof managementActionCreater.postManagementWantedInfoSaga
  >
) {
  try {
    const history = yield getContext("history");
    history.push("/management/notice");
    yield call(apiDefault().post, "/recruitments", action.payload);
    toast.dark("성공적으로 등록했습니다");
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
}

function* deleteManagementWantedInfo(
  action: ReturnType<
    typeof managementActionCreater.deleteManagementWantedInfoSaga
  >
) {
  try {
    yield call(apiDefault().delete, `/recruitments/uuid/${action.payload}`);
    toast.dark("성공적으로 삭제했습니다");
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
}

function* editManagementWantedInfo(
  action: ReturnType<
    typeof managementActionCreater.editManagementWantedInfoSaga
  >
) {
  try {
    const { members, recruit_concept, recruitment_uuid } = action.payload;
    yield call(apiDefault().patch, `/recruitments/uuid/${recruitment_uuid}`, {
      members,
      recruit_concept
    });
    toast.dark("성공적으로 수정했습니다");
  } catch (err) {
    const axiosErr = err as AxiosError;
    errorHandler(axiosErr.response.status, yield getContext("history"));
  }
}

function* managementSaga() {
  yield takeEvery(
    managementAction.GET_MANAGEMENT_WANTED_INFO_SAGA,
    getManagementWantedInfoSaga
  );

  yield takeEvery(
    managementAction.POST_MANAGEMENT_WANTED_INFO_SAGA,
    postManagementWantedInfo
  );

  yield takeEvery(
    managementAction.DELETE_MANAGEMENT_WANTED_INFO_SAGA,
    deleteManagementWantedInfo
  );

  yield takeEvery(
    managementAction.EDIT_MANAGEMENT_WANTED_INFO_SAGA,
    editManagementWantedInfo
  );
}

export default managementSaga;
