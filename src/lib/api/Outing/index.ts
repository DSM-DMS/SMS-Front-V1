import axios from "axios";

import { apiDefault, SERVER } from "../client";
import {
  ResLocationWithDefault,
  ReqOuting,
  ResOutingWithDefault,
  ResHistoryWithDefault,
  ResNaverLocalWithDefault
} from "../payloads/Outing";

export const getNaverLocation = (query: string) => {
  const encodingUrl = window.encodeURI(query);
  return axios.get<ResLocationWithDefault[]>(
    `/search/local.json?start=1&sort=random&display=5&query=${encodingUrl}`,
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
    `/students/uuid/${studentUuid}/outings?start=${start}&count=9`
  );
};

export const getNaverSearchLocal = (keyword: string) => {
  return apiDefault().get<ResNaverLocalWithDefault>(
    `${SERVER.hostUrl}naver-open-api/search/local?keyword=${keyword}`
  );
};
