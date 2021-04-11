import { useCallback, useState } from "react";

const useHistoryModal = () => {
  const [modal, setModal] = useState<boolean>(false);

  const closeModal = useCallback(() => {
    setModal(false);
  }, []);

  const openModal = useCallback(() => {
    setModal(true);
  }, []);

  return [modal, openModal, closeModal] as const;
};

export default useHistoryModal;
