import React, { FC, useCallback, memo } from 'react';
import NavigationItem from './NavigationItem';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { pageMove } from '../../../modules/action/page';

interface Props {
  name: string;
  isActive: boolean;
  src: string;
  route: string;
}

const MainNavigationItemContainer: FC<Props> = ({
  isActive,
  name,
  src,
  route,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    if (isActive) return;
    dispatch(pageMove(name));
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

export default memo(MainNavigationItemContainer);
