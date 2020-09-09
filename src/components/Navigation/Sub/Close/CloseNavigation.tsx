import React, { FC, useCallback } from 'react';
import { stateType } from '../../../../modules/reducer';
import { useSelector, useDispatch } from 'react-redux';
import { PageType, SubNavObj } from '../../../../lib/static';
import * as S from './styles';
import { subPageMove } from '../../../../modules/action/page';
import { useHistory } from 'react-router';
import { changeSubNavOpen } from '../../../../modules/action/subNav';

interface Props {
  subRouteData: SubNavObj;
}

const CloseNavigatin: FC<Props> = ({ subRouteData }) => {
  const { mainUrl, subUrl } = useSelector((store: stateType) => store.page);
  const data = subRouteData[mainUrl as PageType];
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <S.Container>
      {data.map(({ name, acitveUrl, url, route }) => (
        <S.ImgWrap
          isActive={name === subUrl}
          onClick={() => {
            if (name === subUrl) dispatch(changeSubNavOpen());
            dispatch(subPageMove(name));
            history.push(route);
          }}
        >
          <S.Img src={name === subUrl ? acitveUrl : url} />
        </S.ImgWrap>
      ))}
    </S.Container>
  );
};

export default CloseNavigatin;
