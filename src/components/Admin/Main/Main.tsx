import React, { FC, ReactElement, useState } from 'react';

import * as S from './style';
import ScheduleModal from './ScheduleModal';
import DeleteScheduleModal from './DeleteScheduleModal';

import * as MainS from '../../../components/Main/style';
import Schedule from '../../Main/Schedule/Schedule';
import ScheduleDetail from '../../Main/ScheduleDetail/ScheduleDetail';
import Timetable from '../../Main/Timetable/Timetable';

interface Props {}

export type ModalType = 'add' | 'edit' | 'delete';

const AdminMain: FC<Props> = (): ReactElement => {
  const [modal, setModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>('add');

  const handleClickShowModal = (type: ModalType) => {
    setModal(true);
    setModalType(type);
  };

  const handleClickCloseModal = () => {
    setModal(false);
  };

  return (
    <S.AdminMainWrap>
      <MainS.MainLeft>
        <Schedule />
        <Timetable />
      </MainS.MainLeft>
      <MainS.MainRight>
        <ScheduleDetail handleClickShowModal={handleClickShowModal} />
      </MainS.MainRight>
      {modal &&
        (modalType === 'add' || modalType === 'edit' ? (
          <ScheduleModal
            type={modalType}
            handleClickCloseModal={handleClickCloseModal}
          />
        ) : (
          <DeleteScheduleModal handleClickCloseModal={handleClickCloseModal} />
        ))}
    </S.AdminMainWrap>
  );
};

export default AdminMain;
