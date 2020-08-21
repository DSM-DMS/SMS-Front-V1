import React, { FC } from 'react';
import { BoardObj } from '../../Board';
import BoardTableItem from './item/BoardTableItem';

interface Props {
  data: BoardObj[];
}

const BoardTableBody: FC<Props> = ({ data }) => {
  return (
    <div>
      {data.map(({ id, title, viewCount, date }) => (
        <BoardTableItem
          id={id}
          title={title}
          viewCount={viewCount}
          date={date}
          key={id}
        />
      ))}
    </div>
  );
};

export default BoardTableBody;
