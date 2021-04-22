import useBool from "./common/useBoolean";
import useInput from "./common/useInput";
import useValue from "./common/useValue";

const useApplyInputs = () => {
  const [place, handlePlace] = useValue();
  const [reason, onChangeReason] = useInput();
  const [roadAddress, handleRoadAddress] = useValue();
  const [situation, applySickOut, cancelSickOut] = useBool();

  return [
    place,
    reason,
    roadAddress,
    situation,
    handlePlace,
    onChangeReason,
    applySickOut,
    cancelSickOut,
    handleRoadAddress
  ] as const;
};

export default useApplyInputs;
