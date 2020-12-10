import { ResDefault } from "../index";

export interface ResTimeTable {
  time1: string;
  time2: string;
  time3: string;
  time4: string;
  time5: string;
  time6: string;
  time7: string;
}

export interface ResTimeTableWithDefault extends ResTimeTable, ResDefault {}
