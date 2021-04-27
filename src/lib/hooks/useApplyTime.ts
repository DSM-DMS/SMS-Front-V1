import { useCallback, useState } from "react";
import { OnChangeEvent } from "./common/useInput";

const useApplyTime = () => {
  const [outTime, setOut] = useState<string>("");
  const [inTime, setIn] = useState<string>("");

  const onChangeOut = useCallback((e: OnChangeEvent) => {
    setOut(e.currentTarget.value);
  }, []);

  const onChangeIn = useCallback((e: OnChangeEvent) => {
    setIn(e.currentTarget.value);
  }, []);

  return [outTime, inTime, onChangeOut, onChangeIn] as const;
};

export default useApplyTime;
