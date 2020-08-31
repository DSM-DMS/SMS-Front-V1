import React, { FC } from 'react';
import * as S from './styles';
import WantedHeader from './Header/WantedHeader';
import WantedBody from './Body/WantedBody';
import { CircleWantedDetail } from '../../../containers/Circle/Wanted/Detail/CircleWantedDetailContainer';

const CircleWantedDetail: FC<CircleWantedDetail> = ({
  name,
  introduce,
  date,
  leader,
  field,
  grade,
  where,
  imgSrc,
  peoples,
  tags,
  projects,
  comments,
}) => {
  const { three, two, one } = peoples;
  return (
    <S.Container>
      <WantedHeader name={name} date={date} />
      <WantedBody
        imgSrc={imgSrc}
        tags={tags}
        projects={projects}
        introduce={introduce}
        leader={leader}
        three={three}
        two={two}
        one={one}
        where={where}
        field={field}
        grade={grade}
        comments={comments}
      />
    </S.Container>
  );
};

export default CircleWantedDetail;
