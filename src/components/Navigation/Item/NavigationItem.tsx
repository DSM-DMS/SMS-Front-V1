import React, { memo } from "react";
import { FC } from "react";
import * as S from "./styles";

interface Props {
  name: string;
  src: string;
  isActive: boolean;
  onClick: () => void;
  notRead?: boolean;
}

const NavigationItem: FC<Props> = ({
  src,
  name,
  isActive,
  onClick,
  notRead
}) => {
  return (
    <S.Container
      className={isActive ? "active" : ""}
      onClick={onClick}
      isActive={isActive}
    >
      <S.Header>
        <S.Img src={src} />
        <S.ItemName notRead={notRead}>{name}</S.ItemName>
      </S.Header>
      {isActive && <S.Triangle />}
    </S.Container>
  );
};

export default memo(NavigationItem);
