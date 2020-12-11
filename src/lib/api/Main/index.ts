import { apiDefault } from "../client";
import { ResTimetableWithDefault } from "../payloads/Main";

export const getTimetable = (weekNum: number) => {
  return apiDefault().get<ResTimetableWithDefault>(
    `time-tables/week-numbers/${weekNum}`
  );
};
