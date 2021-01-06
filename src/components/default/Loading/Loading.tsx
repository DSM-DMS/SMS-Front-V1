import React, { FC } from "react";
import styled from "styled-components";

import { Spinner } from "../../../assets";

interface Props {
  size?: string;
}

const SpinnerWrap = styled.img<Props>`
  display: inline-block;
  width: ${({ size }) => (size ? size : "40px")};
  height: ${({ size }) => (size ? size : "40px")};
`;

const Loading: FC<Props> = ({ size }) => {
  return (
    <SpinnerWrap src={Spinner} alt="loading" title="loading" size={size} />
  );
};

export default Loading;
