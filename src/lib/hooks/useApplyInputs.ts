import { ChangeEvent, useCallback, useState } from "react";

const useApplyInputs = () => {
  const [roadAddress, setRoadAddress] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [situation, setSituation] = useState<boolean>(false);

  const handlePlace = useCallback((value: string) => {
    setPlace(value);
  }, []);

  const cancelSickOut = useCallback(() => {
    setSituation(false);
  }, []);

  const applySickOut = useCallback(() => {
    setSituation(true);
  }, []);

  const handleReason = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setReason(e.currentTarget.value);
  }, []);

  const handleRoadAddress = useCallback((roadAddress: string) => {
    setRoadAddress(roadAddress);
  }, []);

  return [
    roadAddress,
    place,
    reason,
    situation,
    handlePlace,
    cancelSickOut,
    applySickOut,
    handleReason,
    handleRoadAddress
  ] as const;
};

export default useApplyInputs;
