import React, { FC, ReactElement, useState } from "react";

import * as S from "./style";
import ScheduleModal from "./ScheduleModal";
import DeleteScheduleModal from "./DeleteScheduleModal";

import * as MainS from "../../../components/Main/style";
import Schedule from "../../Main/Schedule/Schedule";
import ScheduleDetail from "../../Main/ScheduleDetail/ScheduleDetail";
import {
  ADD,
  EDIT,
  ModalType
} from "../../../containers/Admin/Main/AdminMainContainer";

interface Props {
  modal: boolean;
  modalType: ModalType;
  handleShowAdd: () => void;
  handleShowEdit: () => void;
  handleShowDelete: () => void;
  handleCloseModal: () => void;
}

const AdminMain: FC<Props> = ({
  modal,
  modalType,
  handleShowAdd,
  handleShowEdit,
  handleShowDelete,
  handleCloseModal
}): ReactElement => {
  return (
    <S.AdminMainWrap>
      <MainS.MainLeft>
        <Schedule />
      </MainS.MainLeft>
      <MainS.MainRight>
        <ScheduleDetail
          handleShowAdd={handleShowAdd}
          handleShowEdit={handleShowEdit}
          handleShowDelete={handleShowDelete}
        />
      </MainS.MainRight>
      {modal &&
        (modalType === ADD || modalType === EDIT ? (
          <ScheduleModal type={modalType} handleCloseModal={handleCloseModal} />
        ) : (
          <DeleteScheduleModal handleClickCloseModal={handleCloseModal} />
        ))}
    </S.AdminMainWrap>
  );
};

export default AdminMain;
