import React, { FC, ReactElement, MutableRefObject } from 'react';

import * as S from '../style';

import { MainChangeTable } from '../../../assets';

interface Props {
  resetFn: () => void;
  resetRef: MutableRefObject<HTMLImageElement>;
}

const FilterWrap: FC<Props> = ({
  resetFn,
  resetRef,
  children,
}): ReactElement => {
  return (
    <S.FiltersWrap>
      <S.FilterReset onClick={resetFn}>
        <img ref={resetRef} src={MainChangeTable} title="reset" alt="rest" />
      </S.FilterReset>
      {children}
    </S.FiltersWrap>
  );
};

export default FilterWrap;
