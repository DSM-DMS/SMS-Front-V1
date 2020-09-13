import React, { FC, ReactElement, useState, useEffect } from 'react';

import ModalApply from './ModalApply';
import ModalOnlineCard from './ModalOnlineCard';

import * as S from '../style';

interface Props {
  handleModal: (isShow: boolean) => void;
}

const Modal: FC<Props> = ({ handleModal }): ReactElement => {
  const [mode, setMode] = useState<'apply' | 'card'>('apply');

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
          <ModalApply handleMode={handleMode} handleModal={handleModal} />
        )}
        {mode === 'card' && (
          <ModalOnlineCard handleMode={handleMode} handleModal={handleModal} />
        )}
      </S.ModalContentWrap>
    </S.HistoryModalWrap>
  );
};

export default Modal;
