import { ResHistoryItem } from "../../../lib/api/payloads/Outing";

export const SET_OUTING_LIST = "outing/SET_OUTING_LIST" as const;
export const SET_SELECTED_OUTING = "outing/SET_SELECTED_OUTING" as const;

export const setOutingHistoryList = (histories: ResHistoryItem[]) => ({
  type: SET_OUTING_LIST,
  payload: { histories }
});
export const setSelectedHistory = (history: ResHistoryItem) => ({
  type: SET_SELECTED_OUTING,
  payload: { history }
});

export type OutingAction = ReturnType<
  typeof setOutingHistoryList | typeof setSelectedHistory
>;
