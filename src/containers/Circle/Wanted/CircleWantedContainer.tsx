import React, { FC, useState, useCallback, ChangeEvent } from 'react';
import * as S from './styles';
import { PageHeader, Category } from '../../../components';
import { NavIconCircleBlue } from '../../../assets';
import { Hr } from '../../../components/Board/styles';
import CircleBox from '../../../components/CircleBox/CircleBox';

const WantedContainer: FC = () => {
  const [keyword, setkeyword] = useState<string>('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setkeyword(e.target.value);
  }, []);

  return (
    <S.Container>
      <PageHeader
        title="동아리 모집"
        imgSrc={NavIconCircleBlue}
        type="DETAIL"
      />
      <Hr />
      <Category
        onChange={onChange}
        placeHolder="검색할 동아리 이름을 입력하세요"
      />
      <S.BoxWrap>
        <CircleBox />
        <CircleBox />
        <CircleBox />
        <CircleBox />
        <CircleBox />
        <CircleBox />
        <CircleBox />
        <CircleBox />
        <CircleBox />
        <CircleBox />
        <CircleBox />
        <CircleBox />
        <CircleBox />
        <CircleBox />
        <CircleBox />
        <CircleBox />
        <CircleBox />
        <CircleBox />
      </S.BoxWrap>
    </S.Container>
  );
};

export default WantedContainer;
