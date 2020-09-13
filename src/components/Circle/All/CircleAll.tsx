import React, { FC, useState, useCallback, ChangeEvent, memo } from 'react';
import * as S from '../Wanted/List/styles';
import { PageHeader, Category, AllCircleBox } from '../../default';
import { NavIconAllBlue } from '../../../assets';
import { Hr } from '../../../components/default/Board/styles';
import { AllCircleBoxType } from '../../default/CircleBox/AllCircleBox';
import { makeFilterFunc, customSelector } from '../../../lib/api';

const CircleAll: FC = () => {
  const data = customSelector((state) => state.poster.all.list);
  const [keyword, setkeyword] = useState<string>('');
  const filterFunc = makeFilterFunc<AllCircleBoxType>(
    data,
    ({ name }, keyword) => name.includes(keyword),
  );
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setkeyword(e.target.value);
  }, []);

  return (
    <S.Container>
      <PageHeader
        title="동아리 전체보기"
        imgSrc={NavIconAllBlue}
        type="DETAIL"
      />
      <Hr />
      <Category
        onChange={onChange}
        placeHolder="검색할 동아리 이름을 입력하세요"
      />
      <S.BoxWrap>
        {filterFunc(keyword).map(
          ({ name, leader, description, field, imgSrc, where }) => (
            <AllCircleBox
              name={name}
              description={description}
              field={field}
              leader={leader}
              imgSrc={imgSrc}
              where={where}
            />
          ),
        )}
      </S.BoxWrap>
    </S.Container>
  );
};

export default memo(CircleAll);
