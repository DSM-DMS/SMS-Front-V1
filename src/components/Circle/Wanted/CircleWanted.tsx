import React, { FC, useState, useCallback, ChangeEvent } from 'react';
import * as S from './styles';
import { PageHeader, Category } from '../../../components/default';
import { NavIconCircleBlue } from '../../../assets';
import { WantedCircleBox } from '../../../components/default';
import { CircleBoxFilterFunc } from '../../../lib/api';
import { WantedCircleBoxData } from '../../../components/default/CircleBox/WantedCircleBox';
import { Hr } from '../../../components/default/Board/styles';

interface Props {
  data: WantedCircleBoxData[];
}

const CircleWanted: FC<Props> = ({ data }) => {
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
        {CircleBoxFilterFunc(data, keyword).map(
          ({ name, field, description, job, where, grade, date, imgSrc }) => (
            <WantedCircleBox
              field={field}
              name={name}
              description={description}
              job={job}
              where={where}
              grade={grade}
              date={date}
              imgSrc={imgSrc}
            />
          ),
        )}
      </S.BoxWrap>
    </S.Container>
  );
};

export default CircleWanted;
