import React, { FC } from "react";
import styled from "styled-components";

import { Spinner } from "../../../assets";

interface Props {}

const SpinnerWrap = styled.img`
  display: inline-block;
  width: 40px;
  height: 40px;
`;

const Loading: FC<Props> = () => {
  return <SpinnerWrap src={Spinner} alt="loading" title="loading" />;
};

export default Loading;
