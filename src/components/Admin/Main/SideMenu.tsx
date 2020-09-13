import React, { FC, ReactElement } from 'react';

interface Props {}

const SideMenu: FC<Props> = (): ReactElement => {
  return (
    <div>
      <p>학사 일정</p>
      <p>외출 관리</p>
      <p>공지사항</p>
    </div>
  );
};

export default SideMenu;
