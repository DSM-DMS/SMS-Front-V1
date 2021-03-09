import React, { FC, useCallback, memo } from "react";
import NavigationItem from "./NavigationItem";
import { useDispatch, useSelector } from "react-redux";
import { pageMove, subPageMove } from "../../../modules/action/page";
import { useHistory } from "react-router";
import { stateType } from "../../../modules/reducer";
import { toast } from "react-toastify";

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
  subUrl
}) => {
  const data = useSelector((store: stateType) => store.header);
  const dispatch = useDispatch();
  const history = useHistory();

  const onClick = useCallback(() => {
    if (data.name.length === 0) {
      toast.error("로그인을 진행해 주세요");
      return;
    }
    if (history.location.pathname === route) return;

    dispatch(pageMove(name));
    dispatch(subPageMove(subUrl));
    history.push(route);
  }, [dispatch, route, data.name]);

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
