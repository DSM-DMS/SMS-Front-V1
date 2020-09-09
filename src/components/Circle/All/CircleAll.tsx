import React, { FC, useState, useCallback, ChangeEvent, memo } from 'react';
import * as S from '../Wanted/List/styles';
import { PageHeader, Category, AllCircleBox } from '../../default';
import { NavIconAllBlue } from '../../../assets';
import { Hr } from '../../../components/default/Board/styles';
import { AllCircleBoxType } from '../../default/CircleBox/AllCircleBox';
import { makeFilterFunc } from '../../../lib/api';

interface Props {
  data: AllCircleBoxType[];
}

const CircleAll: FC<Props> = ({ data }) => {
  const [keyword, setkeyword] = useState<string>('');
  const filterFunc = makeFilterFunc<AllCircleBoxType>(data, (data) => [
    data.name,
  ]);
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
              leader={leader}
              description={description}
              field={field}
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
