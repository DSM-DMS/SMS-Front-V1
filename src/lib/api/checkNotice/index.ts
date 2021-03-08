import { AxiosResponse } from "axios";
import { apiDefault } from "../client";
import { CheckNoticeRes } from "../payloads/checkNotice";

export const reqCheckNotce = (
  studentUuid: string
): Promise<AxiosResponse<CheckNoticeRes>> => {
  return apiDefault().get<CheckNoticeRes>(
    `/students/uuid/${studentUuid}/announcement-check`
  );
};
