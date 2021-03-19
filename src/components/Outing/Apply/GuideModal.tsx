import React, { FC } from "react";

import * as S from "../style";

interface Props {
  handleApplyOuting: () => void;
  closeModal: () => void;
}

const GuideModal: FC<Props> = ({ closeModal, handleApplyOuting }) => {
  return (
    <>
      <S.GuideModalBack onClick={closeModal} />
      <S.GuideModalWrap>
        <p>
          신청이 완료되면 학부모에게 승인 요청 문자가 전송되고, 승인 후에는
          본인에게 승인 완료 문자가 전송됩니다.
        </p>
        <p>
          학부모 승인 완료 문자가 본인에게 전송되면 선생님께 직접 방문하여
          선생님 승인을 받아주세요.
        </p>
        <p>
          외출 시작 및 종료는 Android 혹은 iOS 어플리케이션을 통해서
          진행해주세요.
        </p>
        <p>
          또한, 외출 전 정문 지킴이 선생님에게 '모바일 {">"} 오늘의 외출증'을
          보여 드려야합니다!
        </p>
        <ul>
          <li>
            * 개인정보 동의서를 통해 받은 전화번호로 문자가 전송됩니다. 번호가
            변경되었다면{" "}
            <a href="https://www.facebook.com/DMSforDSM">DMS 페이스북 그룹</a>에
            문의해주세요.
          </li>
          <li>
            * 해당 계정과 연결된 학무보 계정이 존재하지 않을 시, 학부모 승인
            절차를 건너뛰게 됩니다.
          </li>
        </ul>
        <S.GuideModalButtons onClick={handleApplyOuting}>
          확인
        </S.GuideModalButtons>
        <S.GuideModalButtons onClick={closeModal}>취소</S.GuideModalButtons>
      </S.GuideModalWrap>
    </>
  );
};

export default GuideModal;
