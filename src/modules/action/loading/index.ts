export const START_LOADING = "loading/START_LOADING" as const;
export const FINISH_LOADING = "loading/FINISH_LOADING" as const;

export const startLoading = (payload: string) => ({
  type: START_LOADING,
  payload
});

export const finishLoading = (payload: string) => ({
  type: FINISH_LOADING,
  payload
});

type LoadingAction = ReturnType<typeof startLoading | typeof finishLoading>;

export default LoadingAction;
