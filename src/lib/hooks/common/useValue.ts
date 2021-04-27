import { useCallback, useState } from "react";

const useValue = () => {
  const [value, setValue] = useState<string>("");

  const handleValue = useCallback((value: string) => {
    setValue(value);
  }, []);

  return [value, handleValue] as const;
};

export default useValue;
