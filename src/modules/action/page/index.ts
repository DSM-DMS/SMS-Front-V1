export const PAGE_MOVE = 'page/PAGE_MOVE' as const;

export const pageMove = (payload: string) => ({
  type: PAGE_MOVE,
  payload,
});

export type PageAction = ReturnType<typeof pageMove>;
