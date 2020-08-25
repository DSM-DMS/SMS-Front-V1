export const SET_USER = 'SET_USER' as const;
export const RESET_USER = 'RESET_USER' as const;

export const setUser = (payload: string) => ({
  type: SET_USER,
  payload,
});
export const resetUser = () => ({
  type: RESET_USER,
});

export type HeaderAction =
  | ReturnType<typeof setUser>
  | ReturnType<typeof resetUser>;
