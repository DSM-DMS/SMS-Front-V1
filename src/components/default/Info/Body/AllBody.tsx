import React, { FC } from 'react';
import * as S from './styles';
import InfoDetailSub from './Sub/InfoDetailSub';
import AllMain from './Main/AllMain';

interface Props {
  imgSrc: string;
  tags: string[];
  projects: string[];
  introduce: string;
  where: string;
  leader: string;
  three: string[];
  two: string[];
  one: string[];
}
const AllBody: FC<Props> = ({
  imgSrc,
  tags,
  projects,
  introduce,
  where,
  leader,
  three,
  two,
  one,
}) => {
  return (
    <S.Container>
      <AllMain
        introduce={introduce}
        where={where}
        leader={leader}
        three={three}
        two={two}
        one={one}
      />
      <InfoDetailSub imgSrc={imgSrc} tags={tags} projects={projects} />
    </S.Container>
  );
};

export default AllBody;
