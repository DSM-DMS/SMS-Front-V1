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

export const actionOutingCard = (action: string) => {
  // apiDefault().post(`/outings/uuid/${outing_uuid}`);
};
