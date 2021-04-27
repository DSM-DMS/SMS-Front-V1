import useBool from "./common/useBoolean";
import useInput from "./common/useInput";
import useValue from "./common/useValue";

const useApplyInputs = () => {
  const [place, onChangePlace] = useInput();
  const [reason, onChangeReason] = useInput();
  const [roadAddress, handleRoadAddr] = useValue();
  const [situation, applySickOut, cancelSickOut] = useBool();

  return [
    place,
    reason,
    roadAddress,
    situation,
    onChangePlace,
    onChangeReason,
    handleRoadAddr,
    applySickOut,
    cancelSickOut
  ] as const;
};

export default useApplyInputs;
