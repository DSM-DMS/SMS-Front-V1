import React, { FC, ReactElement, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { AdminMain } from "../../../components";
import { patchSchedules, postSchedules } from "../../../lib/api/Main";
import {
  ReqCreateSchedule,
  ReqEditSchedule
} from "../../../lib/api/payloads/Main";
import { getSchedulesSaga } from "../../../modules/action/main";

interface Props {}

export const ADD = "add" as const;
export const EDIT = "edit" as const;
export const DELETE = "delete" as const;
export type ModalType = typeof ADD | typeof EDIT | typeof DELETE;

const AdminMainContainer: FC<Props> = (): ReactElement => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>(null);

  const createSchedule = useCallback(
    async ({ start, end, detail, schedulerDate }: ReqCreateSchedule) => {
      const startDate = new Date(start);
      const endDate = new Date(end);

      try {
        await postSchedules(
          Math.floor(+startDate / 1000),
          Math.floor(+endDate / 1000),
          detail
        );

        dispatch(
          getSchedulesSaga(
            schedulerDate.getFullYear(),
            schedulerDate.getMonth() + 1
          )
        );
      } catch (err) {
        const status = err.response.status;

        if (status === 403) {
          return alert("선생님 계정으로 이용해주세요.");
        }
      }
    },
    []
  );

  const editSchedule = useCallback(
    async (
      { scheduleUuid, startDate, endDate, detail }: ReqEditSchedule,
      schedulerDate: Date
    ) => {
      try {
        await patchSchedules(scheduleUuid, startDate, endDate, detail);

        dispatch(
          getSchedulesSaga(
            schedulerDate.getFullYear(),
            schedulerDate.getMonth() + 1
          )
        );
      } catch (err) {
        const status = err.response.status;

        if (status === 403) {
          return alert("선생님 계정으로 이용해주세요.");
        }
      }
    },
    []
  );

  const handleShowAdd = useCallback(() => {
    setModal(true);
    setModalType(ADD);
  }, []);

  const handleShowEdit = useCallback(() => {
    setModal(true);
    setModalType(EDIT);
  }, []);

  const handleShowDelete = useCallback(() => {
    setModal(true);
    setModalType(DELETE);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModal(false);
    setModalType(null);
  }, []);

  return (
    <AdminMain
      modal={modal}
      modalType={modalType}
      handleShowAdd={handleShowAdd}
      handleShowEdit={handleShowEdit}
      handleShowDelete={handleShowDelete}
      handleCloseModal={handleCloseModal}
      createSchedule={createSchedule}
      editSchedule={editSchedule}
    />
  );
};

export default AdminMainContainer;
