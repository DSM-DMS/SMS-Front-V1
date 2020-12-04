import React, { FC, memo } from "react";
import * as S from "./styles";
import { Hr } from "../Board/styles";
import PageHeader from "./PageHeader";

interface Props {
  imgSrc: string;
  title: string;
  color: string;
  href?: string;
  isMine: boolean;
  bottom?: boolean;
}

const DetailPageHeader: FC<Props> = ({
  isMine,
  color,
  imgSrc,
  title,
  href,
  bottom
}) => {
  return (
    <>
      <S.Wrap>
        <PageHeader imgSrc={imgSrc} title={title} type={S.DETAIL} />
        <div>
          {bottom! && isMine && (
            <S.DeleteButton color={color}>수정</S.DeleteButton>
          )}
          {href && (
            <S.Button color={color} to={href}>
              목록으로
            </S.Button>
          )}
        </div>
      </S.Wrap>
      <Hr />
    </>
  );
};

export default memo(DetailPageHeader);
