import React, { FC, ChangeEvent, memo } from "react";
import * as S from "./styles";
import { Hr } from "../Board/styles";
import PageHeader from "./PageHeader";
import { SearchInput } from "../../default";

interface Props {
  imgSrc: string;
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ListPageHeader: FC<Props> = ({ imgSrc, title, onChange }) => {
  return (
    <>
      <S.Wrap>
        <PageHeader imgSrc={imgSrc} title={title} type={S.LIST} />
        <S.InputWrap>
          <SearchInput
            placeHolder="검색할 동아리 이름을 입력하세요."
            onChange={onChange}
          />
        </S.InputWrap>
      </S.Wrap>
      <Hr />
    </>
  );
};

export default memo(ListPageHeader);
