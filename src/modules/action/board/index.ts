import { BoardObj } from '../../../components/default/Board/Board';

interface BoardDetail {
  content: string;
}

export const UPDATE_BOARD_LIST = 'board/UPDATE_BOARD_LIST' as const;
export const UPDATE_BOARD_DETAIL = 'board/UPDATE_BOARD_DETAIL' as const;

export const updateBoardList = (payload: BoardObj[]) => ({
  type: UPDATE_BOARD_LIST,
  payload,
});

export const updateBoardDetail = (payload: BoardDetail) => ({
  type: UPDATE_BOARD_DETAIL,
  payload,
});

export type BoardAction =
  | ReturnType<typeof updateBoardList>
  | ReturnType<typeof updateBoardDetail>;
