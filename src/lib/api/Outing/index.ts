import axios from "axios";

import { apiDefault } from "../client";
import {
  ResLocationWithDefault,
  ReqOuting,
  ResOutingWithDefault,
  ResHistoryWithDefault
} from "../payloads/Outing";

export const getNaverLocation = (query: string) => {
  const encodingUrl = window.encodeURI(query);
  return axios.get<ResLocationWithDefault>(
    `https://openapi.naver.com/v1/search/local.json?query=${encodingUrl}&display=10&start=1&sort=random`,
    {
      headers: {
        "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET
      }
    }
  );
};

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

export const getHistory = (studentUuid: string, start: number) => {
  return apiDefault().get<ResHistoryWithDefault>(
    `/students/uuid/${studentUuid}/outings?start=${start}&count=10`
  );
};
