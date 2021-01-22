export const PAGE_MOVE = 'page/PAGE_MOVE' as const;
export const SUB_PAGE_MOVE = 'page/SUB_PAGE_MOVE' as const;

export const pageMove = (payload: string) => ({
  type: PAGE_MOVE,
  payload,
});

export const subPageMove = (payload: string) => ({
  type: SUB_PAGE_MOVE,
  payload,
});
export type PageAction =
  | ReturnType<typeof pageMove>
  | ReturnType<typeof subPageMove>;
