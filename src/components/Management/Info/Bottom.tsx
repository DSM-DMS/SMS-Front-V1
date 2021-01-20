import React, { FC } from "react";
import { Loading } from "../../default";

import * as S from "./style";

interface Props {
  loading: boolean;
  modifyClubInfo: () => Promise<void>;
}

const ManagementInfoBottom: FC<Props> = ({ loading, modifyClubInfo }) => {
  return (
    <S.CenterBottom>
      {loading && <Loading />}
      <S.BottomEditButton onClick={modifyClubInfo}>적용</S.BottomEditButton>
    </S.CenterBottom>
  );
};

export default ManagementInfoBottom;
