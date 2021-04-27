import useApplyInputs from "./useApplyInputs";
import useApplyTime from "./useApplyTime";

export type ApplyState = ReturnType<typeof useApplyState>;

const useApplyState = () => {
  const [outTime, inTime, onChangeOut, onChangeIn] = useApplyTime();
  const [
    place,
    reason,
    roadAddress,
    situation,
    onChangePlace,
    onChangeReason,
    handleRoadAddr,
    applySickOut,
    cancelSickOut
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
    onChangeOut,
    onChangeIn,
    onChangePlace,
    onChangeReason,
    handleRoadAddr,
    cancelSickOut,
    applySickOut
  };

  return { values, handlers } as const;
};

export default useApplyState;
