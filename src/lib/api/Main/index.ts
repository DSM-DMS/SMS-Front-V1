import { apiDefault } from "../client";
import { ResDefault } from "../payloads";
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

export const patchSchedules = (
  scheduleUuid: string,
  startDate: number,
  endDate: number,
  detail: string
) => {
  return apiDefault().patch<ResDefault>(`/schedules/uuid/${scheduleUuid}`, {
    start_date: startDate,
    end_date: endDate,
    detail
  });
};
