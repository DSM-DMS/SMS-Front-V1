import React, { FC, ReactElement } from "react";

import * as S from "./style";

import { paperclipClubPicture } from "../../../assets";

interface Props {}

const ClubPicture: FC<Props> = (): ReactElement => {
  return (
    <S.ClubPicture>
      <div>
        <p>동아리 사진</p>
        <S.ClubPictureInner>
          <S.ClubPictureInnerText>
            💡 로고나 홍보 사진 등 동아리 관련 사진을 넣어주세요.
          </S.ClubPictureInnerText>
          <S.ClubPictureLabel>
            <img
              src={paperclipClubPicture}
              alt="club picture"
              title="club picture"
            />
            <span>첨부파일</span>
            <input type="file" hidden={true} />
          </S.ClubPictureLabel>
        </S.ClubPictureInner>
      </div>
      <S.ClubPictureThumbnail>미리보기</S.ClubPictureThumbnail>
    </S.ClubPicture>
  );
};

export default ClubPicture;
