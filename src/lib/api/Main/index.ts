import { apiDefault } from "../client";
import { ResDefault } from "../payloads";
import { ReqEditSchedule, ResSchedulesWithDefault } from "../payloads/Main";

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

export const patchSchedules = ({
  scheduleUuid,
  startDate,
  endDate,
  detail
}: ReqEditSchedule) => {
  return apiDefault().patch<ResDefault>(`/schedules/uuid/${scheduleUuid}`, {
    start_date: startDate,
    end_date: endDate,
    detail
  });
};

export const deleteSchedules = (scheduleUuid: string) => {
  return apiDefault().delete<ResDefault>(`/schedules/uuid/${scheduleUuid}`);
};
