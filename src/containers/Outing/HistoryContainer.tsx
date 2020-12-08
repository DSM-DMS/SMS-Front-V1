import React, { FC, ReactElement, useEffect, useState } from "react";

import { OutingHistory } from "../../components";
import { getHistory } from "../../lib/api/Outing";
import { ResHistory } from "../../lib/api/payloads/Outing";

interface Props {}

const HistoryContainer: FC<Props> = (): ReactElement => {
  const [histories, setHistories] = useState<ResHistory>({
    outings: []
  });
  const [modal, setModal] = useState<boolean>(false);

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  };

  const getHistories = async () => {
    const {
      data: { outings }
    } = await getHistory(localStorage.getItem("student_uuid"));

    setHistories({ outings });
  };

  useEffect(() => {
    getHistories();
  }, []);

  return (
    <OutingHistory
      histories={histories}
      modal={modal}
      closeModal={closeModal}
      openModal={openModal}
    />
  );
};

export default HistoryContainer;
