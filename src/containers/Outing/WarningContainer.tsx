import React, { FC, ReactElement } from 'react';

import { OutingWarning } from '../../components';

interface Props {}

const WarningContainer: FC<Props> = (): ReactElement => {
  return <OutingWarning />;
};

export default WarningContainer;
