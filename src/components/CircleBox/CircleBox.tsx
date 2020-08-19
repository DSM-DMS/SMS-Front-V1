import React, { FC } from 'react';
import * as S from './styles';

interface Props {}

const CircleBox: FC<Props> = () => {
  return (
    <S.Container>
      <div>
        <S.Header>
          <S.CircleName>VCC</S.CircleName>
          <div>임베디드</div>
        </S.Header>
        <S.CircleIntroduce>
          임베디드를 함께 공부할 열정있는 학생을 모집합니다!
        </S.CircleIntroduce>
        <S.WantedJob>
          <div>*PCB 디자이너1</div>
          <div>*PCB 디자이너1</div>
        </S.WantedJob>
      </div>
      <S.Footer>
        <div>
          <div>세미나실 4-4</div>
          <div>모집대상 : 2학년</div>
        </div>
        <div>
          <div>2020-07-25</div>
          <S.Date>
            <span>~</span> <span>08-01</span>
          </S.Date>
        </div>
      </S.Footer>
      <img src="https://ccimg.hellomarket.com/images/2019/item/07/12/22/3738_4357357_1.jpg?size=s6" />
    </S.Container>
  );
};

export default CircleBox;
