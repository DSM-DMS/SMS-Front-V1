import axios from "axios";
import AES256 from "aes-everywhere";

import { apiDefault, SERVER } from "../client";
import {
  ReqOuting,
  ResOutingWithDefault,
  ResHistoryWithDefault,
  ResNaverLocalWithDefault
} from "../payloads/Outing";
import { ResDefault } from "../payloads";
import { HISTORY_PARAM_COUNT } from "../../hooks/useHistories";

export const START_OUTING = "start" as const;
export const END_OUTING = "end" as const;

export type StudentOutingAction = typeof START_OUTING | typeof END_OUTING;

export const postOuting = (body: ReqOuting) => {
  const { end_time, place, reason, situation, start_time } = body;
  return apiDefault().post<ResOutingWithDefault>(`/outings`, {
    start_time,
    end_time,
    place,
    reason,
    situation
  });
};

export const postStudentOutingAction = (
  uuid: string,
  action: StudentOutingAction
) => {
  return apiDefault().post<ResDefault>(
    `/outings/uuid/${uuid}/actions/${action}`
  );
};

export const getHistory = (studentUuid: string, start: number) => {
  return apiDefault().get<ResHistoryWithDefault>(
    `/students/uuid/${studentUuid}/outings?start=${start}&count=${HISTORY_PARAM_COUNT}`
  );
};

export const getNaverSearchLocal = (keyword: string) => {
  return axios.get<ResNaverLocalWithDefault>(
    `${SERVER.hostUrl}naver-open-api/search/local?keyword=${keyword}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Request-Security": AES256.encrypt(
          `${SERVER.securityBasePlain}:${(+new Date() + "").slice(0, 10)}`,
          SERVER.securityPassPhrase
        )
      }
    }
  );
};
