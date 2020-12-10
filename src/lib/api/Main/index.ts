import { apiDefault } from "../client";
import { ResTimeTableWithDefault } from "../payloads/Main";

export const getTimeTable = (weekNum: number) => {
  return apiDefault().get<ResTimeTableWithDefault>(
    `time-tables/week-numbers/${weekNum}`
  );
};
