export interface BoardListItem {
  announcement_uuid: string;
  number: number;
  title: string;
  date: string;
  views: number;
  writer_name: string;
  is_checked: number;
}

export interface BoardWriteFilter {
  target_grade?: number;
  target_group?: number;
}

export interface ReqBoardWriteFilter extends BoardWriteFilter {
  type: string;
  title: string;
  content: string;
}
