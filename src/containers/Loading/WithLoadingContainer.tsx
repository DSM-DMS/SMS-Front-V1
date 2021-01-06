import React, { FC, useCallback, useState } from "react";

export interface LoadingProps {
  loading: boolean;
  startLoading: () => void;
  endLoading: () => void;
}

interface Props {}

const WithLoadingContainer = (MyComponent: FC<LoadingProps>) => (
  props: Props
) => {
  const [loading, setLoading] = useState<boolean>(false);

  const startLoading = useCallback(() => {
    setLoading(true);
  }, []);

  const endLoading = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <MyComponent
      loading={loading}
      startLoading={startLoading}
      endLoading={endLoading}
      {...props}
    />
  );
};

export default WithLoadingContainer;
