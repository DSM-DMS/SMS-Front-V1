import React from "react";
import { FC } from "react";
import { OutingCardPage } from "../../../../default";

const AdminOutingCardWaitList: FC = () => {
  return <OutingCardPage title="승인대기" isClicked={true} />;
};

export default AdminOutingCardWaitList;

type HOCWrap<T extends {}> = (a: T) => FC<T>;
type HOC = <T extends {}>(a: FC<T>) => HOCWrap<T>;

const IsLoginHOC: HOC = <T extends {}>(Component: FC<T>) => {
  const component: HOCWrap<T> = (props: T) => {
    return <Component {...props} />;
  };
  return component;
};

const A: FC<{ data: string }> = () => {
  return <div>a</div>;
};

IsLoginHOC<{}>(A);
