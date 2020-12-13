import { ResHistoryItem } from "../../../lib/api/payloads/Outing";

export const RESET_OUTING_LIST = "outing/RESET_OUTING_LIST" as const;
export const SET_OUTING_LIST = "outing/SET_OUTING_LIST" as const;
export const SET_SELECTED_OUTING = "outing/SET_SELECTED_OUTING" as const;

export const resetOutingHistoryList = () => ({
  type: RESET_OUTING_LIST
});
export const setOutingHistoryList = (histories: ResHistoryItem[]) => ({
  type: SET_OUTING_LIST,
  payload: { histories }
});
export const setSelectedHistory = (history: ResHistoryItem) => ({
  type: SET_SELECTED_OUTING,
  payload: { history }
});

export type OutingAction = ReturnType<
  | typeof resetOutingHistoryList
  | typeof setOutingHistoryList
  | typeof setSelectedHistory
>;
