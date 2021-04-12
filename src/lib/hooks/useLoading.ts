import { useCallback, useState } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const startLoading = useCallback(() => {
    setLoading(true);
  }, []);

  const endLoading = useCallback(() => {
    setLoading(false);
  }, []);

  return [loading, startLoading, endLoading] as const;
};

export default useLoading;
