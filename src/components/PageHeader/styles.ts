import styled, { css } from 'styled-components';

interface Type {
  type?: string;
}

export const Container = styled.div<Type>`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.type &&
    css`
      flex-direction: row;
      margin-right: 20px;
    `}
`;

export const Img = styled.img`
  width: 44px;
  height: 44px;
`;
export const Title = styled.div<Type>`
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;

  ${(props) =>
    props.type &&
    css`
      margin-left: 20px;
    `}
`;
