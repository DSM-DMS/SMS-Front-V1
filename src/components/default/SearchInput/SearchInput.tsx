import React, { ChangeEvent, FC, KeyboardEvent, memo } from "react";
import * as S from "./styles";
import { SearchIcon } from "../../../assets";

interface Props {
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
}

const SearchInput: FC<Props> = ({ onKeyDown, placeHolder, onChange }) => {
  return (
    <S.InputWrap>
      <S.InputBackground>
        <img alt="검색 아이콘" src={SearchIcon} />
        <S.Input
          onKeyDown={onKeyDown}
          onChange={onChange}
          placeholder={placeHolder}
        />
      </S.InputBackground>
    </S.InputWrap>
  );
};

export default memo(SearchInput);
