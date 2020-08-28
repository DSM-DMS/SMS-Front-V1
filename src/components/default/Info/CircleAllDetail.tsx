import React, { FC } from 'react';
import * as S from './styles';
import { CircleAllDetail } from '../../../containers/Circle/All/Detail/CircleAllDetailContainer';
import AllHeader from './Header/AllHeader';
import AllBody from './Body/AllBody';

const CircleAllDetail: FC<CircleAllDetail> = ({
  name,
  introduce,
  leader,
  where,
  imgSrc,
  tags,
  projects,
  peoples,
}) => {
  const { three, two, one } = peoples;

  return (
    <S.Container>
      <AllHeader name={name} />
      <AllBody
        introduce={introduce}
        leader={leader}
        where={where}
        three={three}
        two={two}
        one={one}
        imgSrc={imgSrc}
        tags={tags}
        projects={projects}
      />
    </S.Container>
  );
};

export default CircleAllDetail;
