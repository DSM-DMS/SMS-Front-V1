import React, { FC, ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Main } from "../../components";
import useCustomSelector from "../../lib/hooks/useCustomSelector";
import { getMainSaga } from "../../modules/action/main";

interface Props {}

const MainContainer: FC<Props> = (): ReactElement => {
  const dispatch = useDispatch();
  const { schedulerDate } = useCustomSelector().main;

  useEffect(() => {
    const year = schedulerDate.getFullYear();
    const month = schedulerDate.getMonth() + 1;
    const day = schedulerDate.getDate();

    dispatch(getMainSaga(year, month, day));
  }, []);

  return <Main />;
};

export default MainContainer;
