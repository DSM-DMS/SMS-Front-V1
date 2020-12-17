import { PageState } from "../modules/reducer/page";
import { useSelector } from "react-redux";
import { stateType } from "../modules/reducer";
import { SERVER } from "../lib/api/client";

type valueType = [string, string];

interface UrlObj {
  [key: string]: valueType;
}

const urlObj: UrlObj = {
  home: ["홈", ""],
  notice: ["공지", ""],
  circles: ["동아리", "공지사항"],
  outing: ["외출신청", "유의사항"]
};

const adminObj: UrlObj = {
  home: ["학사 일정", ""],
  out: ["외출 관리", "승인대기 외출증"],
  notice: ["공지사항", "전체 공지"]
};

const managementObj: UrlObj = {
  edit: ["정보수정", ""],
  wanted: ["모집관리", ""],
  notice: ["공지 관리", ""]
};

const urlObjWrap = {
  admin: adminObj,
  management: managementObj
};

interface SubUrlObj {
  [key: string]: string;
}

const managementUrlObj: SubUrlObj = {
  edit: "none",
  wanted: "none",
  notice: "none"
};

const subUrlObj: SubUrlObj = {
  notice: "공지사항",
  wanted: "부원 모집",
  all: "동아리 전체보기",
  warning: "유의사항",
  apply: "외출신청",
  history: "내 외출신청 내역"
};

const subUrlObjWrap = {
  admin: subUrlObj,
  management: managementUrlObj
};

const adminUrlObj: SubUrlObj = {
  certified: "미인증 외출증",
  now: "현재 외출 학생",
  wait: "승인대기 외출증",
  all: "전체 공지",
  mine: "내가 올린 공지",
  writing: "공지사항 작성"
};

export const getNavUrl = (url: string): PageState => {
  const stringArr = url.split("/");
  const filterStr = stringArr[3] as "home" | "notice" | "circles" | "outing";
  const urlArr = urlObj[filterStr] ||
    (urlObjWrap[stringArr[3]] && urlObjWrap[stringArr[3]][stringArr[4]]) || [
      "",
      ""
    ];
  return {
    mainUrl: urlArr[0],
    subUrl:
      adminUrlObj[stringArr[5]] ||
      subUrlObj[stringArr[4]] ||
      (subUrlObjWrap[stringArr[3]] &&
        subUrlObjWrap[stringArr[3]][stringArr[4]]) ||
      urlArr[1]
  };
};

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

export type CallbackFunc = (state: stateType) => any;
export const customSelector = (callback: CallbackFunc) => useSelector(callback);

export const makeFilterFunc = <T>(
  data: T[],
  callback: (data: T, str: string) => boolean
): ((keyword: string) => T[]) => {
  return (keyword: string) => data.filter(item => callback(item, keyword));
};

export const getImgUrl = url => `${SERVER.s3Url}/${url}`;

export const makeQuery = (object: any) => {
  return Object.keys(object).reduce(
    (state, key) => `${state}${key}=${object[key]}&`,
    ""
  );
};

export const getHourMinute = (date: Date): string => {
  const hour = `${date.getHours()}`.padStart(2, "0");
  const minute = `${date.getMinutes()}`.padStart(2, "0");

  return `${hour}:${minute}`;
};

export const getOutingCardTime = (
  timestamp1: number,
  timestamp2: number
): [string, string, string] => {
  const date1: Date = new Date(timestamp1 * 1000);
  const date2: Date = new Date(timestamp2 * 1000);

  const [year, month, date] = date1.toLocaleDateString().split(".");

  const date1Time: string = getHourMinute(date1);
  const date2Time: string = getHourMinute(date2);

  const dateStr = `${year}년${month}월${date}일`;
  return [dateStr, date1Time, date2Time];
};
