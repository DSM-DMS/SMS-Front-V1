export interface ResOutingCardListItem {
  outing_uuid: string;
  name: string;
  grade: number;
  group: number;
  number: number;
  place: string;
  reason: string;
  start_time: number;
  end_time: number;
  outing_situation: string;
  outing_status: string;
  is_late: boolean;
}

export interface ReqOutingCardFilter {
  grade?: number;
  group?: number;
  floor?: string;
  status: number;
}
