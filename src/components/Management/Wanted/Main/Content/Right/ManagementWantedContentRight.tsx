import React from "react";
import * as S from "../../../../../../styles/CircleWantedDetail";
import { HashTag } from "../../../../../default/Info/Body/Sub/styles";

const ManagementWantedContentRight = () => {
  return (
    <S.ContentRightWrap>
      <div>
        <img src="https://lh3.googleusercontent.com/proxy/MR3P3ln9_top577v9XSMLX4sBlK8FqSqe0QHu-bqI1_pZwPHqsAc_oWzJywUZBfFoBDSkw1tvkqDqheVY-A2B3nqqj_AELrPCYKqzyv0BF05rlNn4Y1yJBaqWjVnDpU6sRNaAsHPV5o5Sob0AkxJrfopX4lAS6BOpAxVsxudMuihHm9tn1obVGCjLKx3ig" />
      </div>
      <div>
        <S.Bold>분야</S.Bold>
        <HashTag>임베디드</HashTag>
        <HashTag>임베디드</HashTag>
        <HashTag>임베디드</HashTag>
      </div>
      <div>
        <S.Bold>진행 프로젝트</S.Bold>
        <div>동아리 면접 일정 공지입니다</div>
        <div>동아리 면접 일정 공지입니다</div>
        <div>동아리 면접 일정 공지입니다</div>
      </div>
    </S.ContentRightWrap>
  );
};

export default ManagementWantedContentRight;
