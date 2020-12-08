import { ResHistoryItem } from "../../../lib/api/payloads/Outing";

export const SET_OUTING_LIST = "outing/SET_OUTING_LIST" as const;
export const SET_SELECTED_OUTING = "outing/SET_SELECTED_OUTING" as const;

export const setOutingList = (outings: ResHistoryItem[]) => ({
  type: SET_OUTING_LIST,
  payload: { outings }
});
export const setSelectedOuting = (outing: ResHistoryItem) => ({
  type: SET_SELECTED_OUTING,
  payload: { outing }
});

export type OutingAction = ReturnType<
  typeof setOutingList | typeof setSelectedOuting
>;
