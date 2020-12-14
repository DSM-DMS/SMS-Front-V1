import React, { FC, ReactElement, useState } from "react";

import { AdminMain } from "../../../components";

interface Props {}

export const ADD = "add" as const;
export const EDIT = "edit" as const;
export const DELETE = "delete" as const;
export type ModalType = typeof ADD | typeof EDIT | typeof DELETE;

const AdminMainContainer: FC<Props> = (): ReactElement => {
  const [modal, setModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>(null);

  const handleShowAdd = () => {
    setModal(true);
    setModalType(ADD);
  };

  const handleShowEdit = () => {
    setModal(true);
    setModalType(EDIT);
  };

  const handleShowDelete = () => {
    setModal(true);
    setModalType(DELETE);
  };

  const handleCloseModal = () => {
    setModal(false);
    setModalType(null);
  };

  return (
    <AdminMain
      modal={modal}
      modalType={modalType}
      handleShowAdd={handleShowAdd}
      handleShowEdit={handleShowEdit}
      handleShowDelete={handleShowDelete}
      handleCloseModal={handleCloseModal}
    />
  );
};

export default AdminMainContainer;
