import { makeQuery } from "../../utils";
import { apiDefault } from "../client";
import {
  ReqOutingCardFilter,
  ResOutingCardListItem
} from "../payloads/OutingCard";

export const getOutingCardList = (filterObj: ReqOutingCardFilter) => {
  const query: string = makeQuery(filterObj);

  return apiDefault().get<{ outings: ResOutingCardListItem[] }>(
    `/outings/with-filter?${query}`
  );
};
