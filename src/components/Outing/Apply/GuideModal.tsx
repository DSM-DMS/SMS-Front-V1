import React, { FC, memo } from "react";

import * as S from "../style";

interface Props {
  closeModal: () => void;
  applyOuting: () => Promise<void>;
}

const guideTexts = [
  "외출 신청이 성공적으로 진행되면 선생님께 직접 방문하여 선생님 승인을 받아주세요.",
  "외출 전 지킴이 선생님께 '모바일 > 오늘의 외출증'을 보여드리고, 시작 버튼을 통해 외출을 하실 수 있습니다.",
  "외출 종료는 직접 하실 수 없고, 선생님께 방문하여 선생님을 통해서 종료를 해주세요.",
  "참고로, 외출 시작 시 해당 계정과 연결된 학부모의 전화번호로 외출 통보 문자가 전송됩니다.",
  "* 개인정보 동의서를 통해 받은 전화번호로 문자가 전송됩니다. 번호가 변경되었다면 <a href='https://www.facebook.com/DMSforDSM'>DMS 페이스북 그룹</a>에 문의해주세요.",
  "* 해당 계정과 연결된 학무보 계정이 존재하지 않을 시, 학부모에게 외출 통보 문자가 전송되지 않습니다."
];

const GuideModal: FC<Props> = ({ closeModal, applyOuting }) => {
  const onClickApply = () => {
    applyOuting();
    closeModal();
  };

  return (
    <>
      <S.GuideModalBack onClick={closeModal} />
      <S.GuideModalWrap>
        {guideTexts.map((text, i) => {
          return <p key={i} dangerouslySetInnerHTML={{ __html: text }} />;
        })}
        <S.GuideModalButtons onClick={onClickApply}>확인</S.GuideModalButtons>
        <S.GuideModalButtons onClick={closeModal}>취소</S.GuideModalButtons>
      </S.GuideModalWrap>
    </>
  );
};

export default memo(GuideModal);
