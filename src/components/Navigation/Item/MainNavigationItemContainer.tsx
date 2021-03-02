import React, { FC, useCallback, memo } from "react";
import NavigationItem from "./NavigationItem";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { pageMove } from "../../../modules/action/page";
import { stateType } from "../../../modules/reducer";
import { toast } from "react-toastify";

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
  route
}) => {
  const data = useSelector((store: stateType) => store.header);
  const history = useHistory();
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    if (data.name.length === 0) {
      toast.error("로그인을 진행해 주세요");
      return;
    }
    if (history.location.pathname === route) return;

    dispatch(pageMove(name));
    history.push(route);
  }, [dispatch, route, data.name]);

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
