import { useCallback, useState } from "react";

const useApplyModal = () => {
  const [guideModal, setGuideModal] = useState<boolean>(false);

  const openGuideModal = useCallback(() => {
    setGuideModal(true);
  }, []);

  const closeGuideModal = useCallback(() => {
    setGuideModal(false);
  }, []);

  return [guideModal, openGuideModal, closeGuideModal] as const;
};

export default useApplyModal;
