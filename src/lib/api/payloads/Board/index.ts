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

export interface BoardWriteData {
  title: string;
  content: string;
}

export interface BoardWrite extends BoardWriteData, BoardWriteFilter {}

export interface ReqBoardWrite extends BoardWrite, BoardWriteFilter {
  type: "club" | "school";
}

export interface BoardEdit extends BoardWrite {
  uuid: string;
}
export interface ReqBoardEdit extends ReqBoardWrite {
  uuid: string;
}
