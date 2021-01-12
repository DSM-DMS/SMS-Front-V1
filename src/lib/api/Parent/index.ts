import { apiDefault } from "../client";
import { ParentActions } from "../../../containers/Parent/ParentContainer";
import { ResHistoryWithDefault } from "../payloads/Outing";
import { ResOutingInfoWithDefault } from "../payloads/Parent";
import { ResDefault } from "../payloads";

export const getOutingInfo = (confirmUuid: string) => {
  return apiDefault().get<ResOutingInfoWithDefault>(
    `/outings/code/${confirmUuid}`
  );
};

export const postOutingAction = (
  outingUuid: string,
  action: ParentActions,
  confirmUuid: string
) => {
  return apiDefault().post<ResDefault>(
    `/outings/uuid/${outingUuid}/actions/${action}?code=${confirmUuid}`
  );
};

export const getOutingsOfChildren = (studentUuid: string) => {
  return apiDefault().get<ResHistoryWithDefault>(
    `/students/uuid/${studentUuid}/outings`
  );
};
