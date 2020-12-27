import { apiDefault } from "../client";
import { BoardWriteData, BoardWriteFilter } from "../payloads/Board";

export const writeNotice = (
  type: "school" | "club",
  data: BoardWriteData,
  filter: BoardWriteFilter
) => {
  return apiDefault().post("/announcements", {
    ...data,
    ...filter,
    type
  });
};
