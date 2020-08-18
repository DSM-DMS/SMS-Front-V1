import React, { FC } from 'react';
import * as S from './styles';
import SubNavigationItemContainer from '../../Item/SubNavigationItemContainer';
import { useSelector } from 'react-redux';
import { stateType } from '../../../../modules/reducer';
import { subNavObj, PageType } from '../../../../lib/static';

interface Props {
  page: string;
}

const NavigationSubBody: FC<Props> = ({ page }) => {
  const subUrl = useSelector((store: stateType) => store.page.subUrl);
  return (
    <S.Container>
      {subNavObj[page as PageType].map(
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
