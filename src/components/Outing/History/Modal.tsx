import React, { FC, ReactElement, useState, useEffect } from 'react';

import { WithModalApply, WithModalOnlineCard } from './WithModalAni';

import * as S from '../style';

export const REJECT = 'reject';
export const APPROVE = 'approve';
export const OUT = 'out';
export const EXPIRED = 'expired';

type OutingActions =
  | typeof REJECT
  | typeof APPROVE
  | typeof OUT
  | typeof EXPIRED;

interface Props {
  handleModal: (isShow: boolean) => void;
}

export interface WithModalProps {
  handleMode: (mode: 'apply' | 'card') => void;
  handleModal: (isShow: boolean) => void;
  outingState: OutingActions;
  setOutingState: (action: OutingActions) => void;
}

const Modal: FC<Props> = ({ handleModal }): ReactElement => {
  const [mode, setMode] = useState<'apply' | 'card'>('apply');
  const [outingState, setOutingState] = useState<OutingActions>(APPROVE);

  const handleMode = (mode: 'apply' | 'card') => {
    setMode(mode);
  };

  useEffect(() => {
    return () => {
      setMode('apply');
    };
  }, []);

  return (
    <S.HistoryModalWrap>
      <S.ModalBack />
      <S.ModalContentWrap>
        {mode === 'apply' && (
          <WithModalApply
            handleMode={handleMode}
            handleModal={handleModal}
            outingState={outingState}
            setOutingState={setOutingState}
          />
        )}
        {mode === 'card' && (
          <WithModalOnlineCard
            handleMode={handleMode}
            handleModal={handleModal}
            outingState={outingState}
            setOutingState={setOutingState}
          />
        )}
      </S.ModalContentWrap>
    </S.HistoryModalWrap>
  );
};

export default Modal;
