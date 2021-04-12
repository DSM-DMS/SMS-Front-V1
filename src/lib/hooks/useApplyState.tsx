import useApplyInputs from "./useApplyInputs";
import useApplyTime from "./useApplyTime";

export type ApplyState = ReturnType<typeof useApplyState>;

const useApplyState = () => {
  const [
    outTime,
    inTime,
    handleOutHour,
    handleOutMin,
    handleInHour,
    handleInMin
  ] = useApplyTime();
  const [
    roadAddress,
    place,
    reason,
    situation,
    handlePlace,
    cancelSickOut,
    applySickOut,
    handleReason,
    handleRoadAddress
  ] = useApplyInputs();

  const values = {
    outTime,
    inTime,
    place,
    reason,
    situation,
    roadAddress
  };
  const handlers = {
    handleOutHour,
    handleOutMin,
    handleInHour,
    handleInMin,
    handlePlace,
    handleReason,
    handleRoadAddress,
    cancelSickOut,
    applySickOut
  };

  return { values, handlers } as const;
};

export default useApplyState;
