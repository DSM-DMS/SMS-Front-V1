import React, { FC, useCallback, memo } from 'react';
import NavigationItem from './NavigationItem';
import { useDispatch } from 'react-redux';
import { pageMove, subPageMove } from '../../../modules/action/page';
import { useHistory } from 'react-router';

interface Props {
  isActive: boolean;
  name: string;
  src: string;
  route: string;
  subUrl: string;
}

const MainSubNavigationItemContainer: FC<Props> = ({
  isActive,
  name,
  src,
  route,
  subUrl,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onClick = useCallback(() => {
    if (isActive) return;

    dispatch(pageMove(name));
    dispatch(subPageMove(subUrl));
    history.push(route);
  }, [dispatch, isActive]);

  return (
    <NavigationItem
      isActive={isActive}
      name={name}
      src={src}
      onClick={onClick}
    />
  );
};

export default memo(MainSubNavigationItemContainer);
