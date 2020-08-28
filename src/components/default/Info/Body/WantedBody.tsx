import React, { FC } from 'react';
import * as S from './styles';
import WantedMain from './Main/WantedMain';
import { Comment } from '../../../../containers/Circle/Wanted/Detail/CircleWantedDetailContainer';
import InfoDetailSub from './Sub/InfoDetailSub';

interface Props {
  imgSrc: string;
  tags: string[];
  projects: string[];
  introduce: string;
  leader: string;
  three: string[];
  two: string[];
  one: string[];
  where: string;
  field: string[];
  grade: number[];
  comments: Comment[];
}

const WantedBody: FC<Props> = ({
  imgSrc,
  tags,
  projects,
  introduce,
  leader,
  three,
  two,
  one,
  where,
  field,
  grade,
  comments,
}) => {
  return (
    <S.Container>
      <WantedMain
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
      <InfoDetailSub imgSrc={imgSrc} tags={tags} projects={projects} />
    </S.Container>
  );
};

export default WantedBody;
