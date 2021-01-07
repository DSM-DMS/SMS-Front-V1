import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { editNotice } from "../../../../../../lib/api/Write";
import { managementActionCreater } from "../../../../../../modules/action/management";
import { stateType } from "../../../../../../modules/reducer";
import * as S from "../../../../../../styles/CircleWantedDetail";
import { Button } from "../../../../../Admin/Notice/writing/styles";
import InfoDetailSub from "../../../../../default/Info/Body/Sub/InfoDetailSub";

const ManagementWantedContentRight = () => {
  const { logo_uri, field, recruit_concept } = useSelector(
    (store: stateType) => store.management
  );
  const dispatch = useDispatch();
  const noticeList = useSelector(
    (store: stateType) => store.noticeList.announcements
  );

  const isEdit = !!recruit_concept;

  const wantedData = useSelector(
    (store: stateType) => store.management.wantedData
  );
  const recruitment_uuid = useSelector(
    (store: stateType) => store.management.recruitment_uuid
  );
  const clickHandler = useCallback(() => {
    const { recruit_concept, members } = wantedData;
    if (!recruit_concept) {
      toast.dark("모집 소개를 입력해주세요");
      return;
    }

    if (isEdit) {
      dispatch(
        managementActionCreater.editManagementWantedInfoSaga({
          members,
          recruit_concept,
          recruitment_uuid
        })
      );

      return;
    }
    dispatch(managementActionCreater.postManagementWantedInfoSaga(wantedData));
  }, [isEdit, wantedData]);

  return (
    <S.ContentRightWrap>
      <InfoDetailSub
        imgSrc={logo_uri}
        tag={field}
        notices={noticeList}
        baseUrl={"/management/notice"}
      />
      <S.ButtonWrapper>
        <Button
          borderColor="transparent"
          backgroundColor="#5323B2"
          color="white"
          onClick={clickHandler}
        >
          {isEdit ? "수정" : "생성"}
        </Button>
      </S.ButtonWrapper>
    </S.ContentRightWrap>
  );
};

export default ManagementWantedContentRight;
