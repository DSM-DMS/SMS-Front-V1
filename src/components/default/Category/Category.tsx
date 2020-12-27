import React, { FC, ChangeEvent, memo } from "react";
import { SearchInput } from "../../default";
import * as S from "./styles";

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
  count: number;
  children: string;
}

const Category: FC<Props> = ({ children, onChange, placeHolder, count }) => {
  return (
    <S.CategoryWrap>
      <S.Category>
        <div>
          <S.Triangle />
          <span>분야</span>
        </div>
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
