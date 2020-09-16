import React, { FC, ReactElement } from 'react';

import * as S from '../style';
import { MainSelector } from '../../../assets';

interface Props {
  type: 'grade' | 'class';
  selected: number;
  setSelected: (type: number) => void;
  filterLen: number;
}

const Filters: FC<Props> = ({
  type,
  selected,
  setSelected,
  filterLen,
}): ReactElement => {
  const gradeOrClass = type === 'grade' ? '학년' : '반';

  return (
    <S.FiltersList>
      <S.FiltersListSelectedWrap>
        <S.FiltersListSelected>
          {selected === 0 ? gradeOrClass : selected}
        </S.FiltersListSelected>
        <img src={MainSelector} alt="selector" title="selector" />
      </S.FiltersListSelectedWrap>
      <S.FiltersListInner>
        {Array(filterLen)
          .fill(0)
          .map((_, i) => (
            <S.FiltersListInnerItem
              key={i}
              onClick={() => {
                setSelected(i + 1);
              }}
            >
              {`${i + 1}${gradeOrClass}`}
            </S.FiltersListInnerItem>
          ))}
      </S.FiltersListInner>
    </S.FiltersList>
  );
};

export default Filters;
