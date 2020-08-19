import React, { FC, ReactElement } from 'react';

import * as S from '../style';

interface Props {}

const Warning: FC<Props> = (): ReactElement => {
  return <S.WarningWarp>Warning</S.WarningWarp>;
};

export default Warning;
