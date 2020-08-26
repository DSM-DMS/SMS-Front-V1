import React, { FC } from 'react';
import * as S from './styles';
import { Hr } from '../../../default/Board/styles';
import { CircleAllDetail } from '../../../../containers/Circle/All/Detail/CircleAllDetailContainer';

interface Props {
  data: CircleAllDetail;
}

const CircleAllDetail: FC<Props> = ({ data }) => {
  const {
    introduce,
    leader,
    tags,
    imgSrc,
    projects,
    peoples: { three, two, one },
  } = data;
  return (
    <S.Container>
      <S.Title>VCC</S.Title>
      <Hr />
      <S.Flex>
        <S.Left>
          <S.P>동아리 소개</S.P>
          <br />
          <S.Color>{introduce}</S.Color>
          <br />
          <S.Color>
            --------------------------------------------------------------------
          </S.Color>
          <br />
          <S.Color>
            <p style={{ whiteSpace: 'pre-wrap' }}>
              <b>&gt; 인원</b>
              <p>- 부장 {leader}</p>
              <p>- 3학년 {three.join(', ')}</p>
              <p>- 2학년 {two.join(', ')}</p>
              <p>- 1학년 {one.join(', ')}</p>
            </p>
          </S.Color>
          <br />
          <S.Color>
            --------------------------------------------------------------------
          </S.Color>
          <br />
          <S.Color>
            <p>
              <b>&gt; 동아리실</b>
            </p>
            -{data.where}
          </S.Color>
        </S.Left>
        <S.Right>
          <div>
            <img src={imgSrc} />
          </div>
          <div>
            <br />
            <S.H3>태그</S.H3>
            {tags.map((tag) => (
              <S.HashTag>{tag}</S.HashTag>
            ))}
          </div>
          <div>
            <br />
            <S.H3>진행 프로젝트</S.H3>
            {projects.map((projectName) => (
              <div>{projectName}</div>
            ))}
          </div>
          <div>
            <br />
            <S.H3>공지사항</S.H3>
            <div>공지사항1</div>
            <div>공지사항2</div>
          </div>
        </S.Right>
      </S.Flex>
    </S.Container>
  );
};

export default CircleAllDetail;
