import React, { FC, ReactElement } from 'react';

import { OutingHistory } from '../../components';

interface Props {}

const HistoryContainer: FC<Props> = (): ReactElement => {
  return <OutingHistory />;
};

export default HistoryContainer;
