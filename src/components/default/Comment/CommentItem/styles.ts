import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 7px 0;
`;
export const Header = styled.div`
  display: flex;
  color: #979797;
`;
export const HeaderRow = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  &:nth-child(2) {
    justify-content: flex-end;
  }
`;

export const UserName = styled.div`
  font-size: 16px;
  color: #5323b2;
  margin-right: 5px;
`;

export const Content = styled.div`
  font-size: 14px;
`;

export const OpenWrite = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

export const WriteDate = styled.div`
  font-size: 12px;
`;

export const SubContainer = styled.div`
  display: flex;
`;

export const ImgWrap = styled.div`
  width: 30px;
`;

export const Flex1 = styled.div`
  flex: 1;
`;

export const SubHeader = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
