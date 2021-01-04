import React, { FC, ChangeEvent, memo, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { SearchInput } from "../../default";
import * as S from "./styles";

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
  count: number;
  children: string;
}

const Category: FC<Props> = ({ children, onChange, placeHolder, count }) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const changeMenuIsOpen = useCallback(() => {
    setMenuIsOpen(prev => !prev);
  }, []);

  return (
    <S.CategoryWrap>
      <S.Category>
        <S.FieldWrap onClick={changeMenuIsOpen}>
          <S.Triangle />
          <span>분야</span>
          <S.Fields isOpen={menuIsOpen}></S.Fields>
        </S.FieldWrap>
        <div>
          {children}
          <S.Count>{count}</S.Count>
        </div>
      </S.Category>
      <SearchInput onChange={onChange} placeHolder={placeHolder} />
    </S.CategoryWrap>
  );
};

export default memo(Category);
