import React, { FC, ChangeEvent } from 'react';
import { SearchInput } from '../default';
import * as S from './styles';

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
}

const Category: FC<Props> = ({ onChange, placeHolder }) => {
  return (
    <S.CategoryWrap>
      <S.Category>
        <div>
          <S.Triangle />
          <span>분야</span>
        </div>
        <div>현재 모집중2</div>
      </S.Category>
      <SearchInput onChange={onChange} placeHolder={placeHolder} />
    </S.CategoryWrap>
  );
};

export default Category;
