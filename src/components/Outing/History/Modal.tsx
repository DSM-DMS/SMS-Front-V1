import React, { FC, ReactElement, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { WithModalApply, WithModalOnlineCard } from "./WithModalAni";

import * as S from "../style";
import { stateType } from "../../../modules/reducer";
import { ResHistoryItem } from "../../../lib/api/payloads/Outing";

export const APPLY_MODAL = "APPLY_MODAL" as const;
export const ONLINE_MODAL = "ONLINE_MODAL" as const;

export type ModalType = typeof APPLY_MODAL | typeof ONLINE_MODAL;

interface Props {
  closeModal: () => void;
  selectedOuting: ResHistoryItem;
}

export interface WithModalProps {
  applyModal: () => void;
  onlineModal: () => void;
  closeModal: () => void;
  outingStatus: string;
  selectedOuting: ResHistoryItem;
}

const Modal: FC<Props> = ({ closeModal, selectedOuting }): ReactElement => {
  const { outing_status } = useSelector(
    (state: stateType) => state.outing.selected
  );
  const [mode, setMode] = useState<ModalType>(APPLY_MODAL);

  const applyModal = () => {
    setMode(APPLY_MODAL);
  };

  const onlineModal = () => {
    setMode(ONLINE_MODAL);
  };

  useEffect(() => {
    return applyModal;
  }, []);

  return (
    <S.HistoryModalWrap>
      <S.ModalBack onClick={closeModal} />
      <S.ModalContentWrap>
        {mode === APPLY_MODAL && (
          <WithModalApply
            applyModal={applyModal}
            onlineModal={onlineModal}
            closeModal={closeModal}
            outingStatus={outing_status}
            selectedOuting={selectedOuting}
          />
        )}
        {mode === ONLINE_MODAL && (
          <WithModalOnlineCard
            applyModal={applyModal}
            onlineModal={onlineModal}
            closeModal={closeModal}
            outingStatus={outing_status}
            selectedOuting={selectedOuting}
          />
        )}
      </S.ModalContentWrap>
    </S.HistoryModalWrap>
  );
};

export default Modal;
