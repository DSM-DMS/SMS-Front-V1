export interface BoardListItem {
  announcement_uuid: string;
  number: number;
  title: string;
  date: string;
  views: number;
  writer_name: string;
  is_checked: number;
}

export type BoardType = "club" | "school";

export interface ResBoardList {
  announcements: BoardListItem[];
  size: number;
}

export interface BoardDetail {
  date: number;
  title: string;
  content: string;
  writer_name: string;
  next_title: string;
  next_announcement_uuid: string;
  previous_title: string;
  previous_announcement_uuid: string;
  target_grade: number;
  target_group: number;
}

export interface BoardWriteFilter {
  target_grade?: number;
  target_group?: number;
}

export interface BoardWriteData {
  title: string;
  content: string;
}

export interface ReqBoardDelete {
  uuid: string;
  type: BoardType;
}

export interface ResBoardDetail extends BoardDetail {}

export interface BoardWrite extends BoardWriteData, BoardWriteFilter {}

export interface ReqBoardWrite extends BoardWrite, BoardWriteFilter {
  type: BoardType;
}

export interface BoardEdit extends BoardWrite {
  uuid: string;
}

export interface ReqBodyBoardEdit extends BoardWriteData, BoardWriteFilter {}
export interface ReqBoardEdit extends ReqBodyBoardEdit {
  uuid: string;
  type: BoardType;
}
