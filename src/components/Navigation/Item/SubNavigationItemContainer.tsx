import React, { FC, useCallback, memo } from 'react';
import NavigationItem from './NavigationItem';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { subPageMove } from '../../../modules/action/page';
import { changeSubNavOpen } from '../../../modules/action/subNav';

interface Props {
  name: string;
  isActive: boolean;
  src: string;
  route: string;
}

const SubNavigationItemContainer: FC<Props> = ({
  isActive,
  name,
  src,
  route,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    if (isActive) {
      dispatch(changeSubNavOpen());
      return;
    }

    dispatch(subPageMove(name));
    history.push(route);
  }, [dispatch, isActive]);

  return (
    <NavigationItem
      onClick={onClick}
      isActive={isActive}
      name={name}
      src={src}
    />
  );
};

export default memo(SubNavigationItemContainer);
