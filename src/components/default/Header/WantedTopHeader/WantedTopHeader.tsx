import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { managementActionCreater } from "../../../../modules/action/management";
import { stateType } from "../../../../modules/reducer";
import { Button } from "../../../Admin/Notice/writing/styles";
import * as S from "./styles";

interface Props {}

const WantedTopHeader: FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const uuid = useSelector(
    (store: stateType) => store.management.recruitment_uuid
  );
  const deletePost = useCallback(() => {
    dispatch(managementActionCreater.deleteManagementWantedInfoSaga(uuid));
  }, []);
  return (
    <S.TopHeader>
      <Button
        onClick={deletePost}
        backgroundColor="#FF5555"
        borderColor="transparent"
        color="white"
      >
        모집 삭제
      </Button>
    </S.TopHeader>
  );
};

export default WantedTopHeader;
