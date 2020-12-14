import { apiDefault } from "../client";
import { ResSchedulesWithDefault } from "../payloads/Main";

export const postSchedules = (
  start_date: number,
  end_date: number,
  detail: string
) => {
  return apiDefault().post<ResSchedulesWithDefault>(`/schedules`, {
    start_date,
    end_date,
    detail
  });
};
