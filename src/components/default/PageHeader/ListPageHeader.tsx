import React, { ChangeEvent, FC, KeyboardEvent, memo } from "react";
import * as S from "./styles";
import { Hr } from "../Board/styles";
import PageHeader from "./PageHeader";
import { SearchInput } from "../../default";

interface Props {
  imgSrc: string;
  title: string;
  newButton?: boolean;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ListPageHeader: FC<Props> = ({
  imgSrc,
  title,
  onChange,
  onKeyDown,
  newButton
}) => {
  return (
    <>
      <S.Wrap>
        <PageHeader imgSrc={imgSrc} title={title} type={S.LIST} />
        <S.InputWrap>
          <SearchInput
            onChange={onChange}
            placeHolder="제목 또는 글쓴이를 입력하세요"
            onKeyDown={onKeyDown}
          />
          {newButton && (
            <S.Button to="/management/write" color="black">
              새공지
            </S.Button>
          )}
        </S.InputWrap>
      </S.Wrap>
      <Hr />
    </>
  );
};

export default memo(ListPageHeader);
