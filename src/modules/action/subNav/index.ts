export const CHANGE_SUB_NAV_OPEN = 'SUBNAV_CHANGE_SUV_NAV_OPEN' as const;
export const CHANGE_SUV_NAV_OPEN_SAGA = 'SUBNAV_CHANGE_SUV_NAV_OPEN_SAGA' as const;

export const changeSubNavOpen = () => ({
  type: CHANGE_SUB_NAV_OPEN,
});

export const changeSubNavOpenSaga = (payload: string) => ({
  type: CHANGE_SUV_NAV_OPEN_SAGA,
  payload,
});

export type SubNavSagaAction = ReturnType<typeof changeSubNavOpen>;
export type SubNavAction = ReturnType<typeof changeSubNavOpen>;
