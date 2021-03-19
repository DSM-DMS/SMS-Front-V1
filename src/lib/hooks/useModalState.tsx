import { useCallback, useState } from "react";

export type ApplyModalState = ReturnType<typeof useModalState>;

const useModalState = () => {
  const [modal, setModal] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setModal(false);
  }, []);

  return [modal, openModal, closeModal] as const;
};

export default useModalState;
