import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { History } from "history";

import { ResDefault } from "./api/payloads";
import { ResStudentInfo } from "./api/payloads/Login";
import { ResStudents } from "./api/payloads/Management";

import { PageState } from "../modules/reducer/page";
import { stateType } from "../modules/reducer";
import { SERVER } from "../lib/api/client";
import { BoardType } from "./api/payloads/Board";

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
  certified: "거절된 외출증",
  now: "현재 외출 학생",
  wait: "승인대기 외출증",
  all: "전체 공지",
  mine: "내가 올린 공지",
  writing: "공지사항 작성",
  done: "종료된 외출증",
  ok: "최종 승인 외출증"
};

export const getNavUrl = (url: string): PageState => {
  const stringArr = url.split("/");
  const filterStr = stringArr[1] as "home" | "notice" | "circles" | "outing";
  const urlArr = urlObj[filterStr] ||
    (urlObjWrap[stringArr[1]] && urlObjWrap[stringArr[1]][stringArr[2]]) || [
      "",
      ""
    ];
  return {
    mainUrl: urlArr[0],
    subUrl:
      adminUrlObj[stringArr[3]] ||
      subUrlObj[stringArr[2]] ||
      (subUrlObjWrap[stringArr[1]] &&
        subUrlObjWrap[stringArr[1]][stringArr[2]]) ||
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

export const getImgUrl = url =>
  `${SERVER.s3Url}/${url}?timestamps=${Date.now()}`;

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

export const isIncludeEmpty = (datas: any[] | object): boolean => {
  for (let i in datas) {
    if (!datas[i]) return true;
  }
  return false;
};
export const getWeekOfMonth = (d: Date) => {
  const month = d.getMonth(),
    year = d.getFullYear(),
    firstWeekday = new Date(year, month, 1).getDay(),
    lastDateOfMonth = new Date(year, month + 1, 0).getDate(),
    offsetDate = d.getDate() + firstWeekday - 1,
    index = 1, // start index at 0 or 1, your choice
    weeksInMonth = index + Math.ceil((lastDateOfMonth + firstWeekday - 7) / 7),
    week = index + Math.floor(offsetDate / 7);

  return week;

  // if (week < 2 + index) return week;
  // return week === weeksInMonth ? index + 5 : week;
};

export const padNum = (n: number) => (n + "").padStart(2, "0");

export const formattingStudent = (student: ResStudents | ResStudentInfo) => {
  return `${student.grade}${student.group}${padNum(student.student_number)}`;
};

export const sorting = (student1: ResStudents, student2: ResStudents) => {
  return formattingStudent(student1) > formattingStudent(student2) ? 1 : -1;
};

export const errorHandler = (errStatus: number, history: History): void => {
  switch (errStatus) {
    case 401:
    case 403: {
      toast.error("로그인을 다시 진행해주세요");
      const href = history.location.pathname;
      if (href.includes("admin")) {
        history.push("/admin/login");
      } else history.push("/login");
      return;
    }
  }
};

export const getFacebookLink = (id: string) => `https://www.facebook.com/${id}`;

export const getAxiosError = (err: AxiosError<ResDefault>) => {
  const { status, code } = err.response.data;
  return { status, code };
};

export const getSuccessHistory = (type: BoardType) =>
  type === "school" ? "/admin/notice/mine" : "/management/notice";
