import React, { FC, useEffect } from 'react';
import * as S from './styles';
import SubNavigationItemContainer from '../../Item/SubNavigationItemContainer';
import { useSelector } from 'react-redux';
import { stateType } from '../../../../modules/reducer';
import { PageType, SubNavObj } from '../../../../lib/static';

interface Props {
  page: string;
  subRouteData: SubNavObj;
}

const NavigationSubBody: FC<Props> = ({ page, subRouteData }) => {
  const subUrl = useSelector((store: stateType) => store.page.subUrl);
  return (
    <S.Container>
      {subRouteData[page as PageType].map(
        ({ name, url, acitveUrl, route }, index) => (
          <SubNavigationItemContainer
            isActive={subUrl === name}
            name={name}
            src={subUrl === name ? acitveUrl : url}
            route={route}
            key={index}
          />
        ),
      )}
    </S.Container>
  );
};

export default NavigationSubBody;
