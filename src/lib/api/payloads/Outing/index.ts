import { ResDefault } from "../";

export interface ResLocationItem {
  title: string;
  link: string;
  category: string;
  description: string;
  telephone: string;
  address: string;
  roadAddress: string;
  mapx: string;
  mapy: string;
}

export interface ResLocation {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: ResLocationItem[];
}

export interface ReqOuting {
  start_time: number;
  end_time: number;
  place: string;
  reason: string;
  situation: "normal" | "emergency";
}

export interface ResOuting {
  outing_uuid: string;
}

export interface ResLocationWithDefault extends ResLocation, ResDefault {}
export interface ResOutingWithDefault extends ResOuting, ResDefault {}
