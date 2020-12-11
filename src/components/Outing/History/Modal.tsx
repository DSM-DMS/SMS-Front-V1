import React, { FC, ReactElement, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { WithModalApply, WithModalOnlineCard } from "./WithModalAni";

import * as S from "../style";
import { stateType } from "../../../modules/reducer";
import { OutingStatus } from "../../../lib/api/payloads/Outing";

interface Props {
  closeModal: () => void;
}

export interface WithModalProps {
  handleMode: (mode: "apply" | "card") => void;
  closeModal: () => void;
  outingStatus: string;
}

const Modal: FC<Props> = ({ closeModal }): ReactElement => {
  const { outing_status } = useSelector(
    (state: stateType) => state.outing.selected
  );
  const [mode, setMode] = useState<"apply" | "card">("apply");

  const handleMode = (mode: "apply" | "card") => {
    setMode(mode);
  };

  useEffect(() => {
    return () => {
      setMode("apply");
    };
  }, []);

  return (
    <S.HistoryModalWrap>
      <S.ModalBack onClick={closeModal} />
      <S.ModalContentWrap>
        {mode === "apply" && (
          <WithModalApply
            handleMode={handleMode}
            closeModal={closeModal}
            outingStatus={outing_status}
          />
        )}
        {mode === "card" && (
          <WithModalOnlineCard
            handleMode={handleMode}
            closeModal={closeModal}
            outingStatus={outing_status}
          />
        )}
      </S.ModalContentWrap>
    </S.HistoryModalWrap>
  );
};

export default Modal;
