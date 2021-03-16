import React, { FC, ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Main } from "../../components";
import { getMainSaga } from "../../modules/action/main";

interface Props {}

const MainContainer: FC<Props> = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();

    dispatch(getMainSaga(year, month, day));
  }, []);

  return <Main />;
};

export default MainContainer;
