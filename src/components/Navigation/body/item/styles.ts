import styled from 'styled-components';

export const Container = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 13px 15px;
  box-sizing: border-box;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    `{
    color: #5323b2;
    background: white;
    border-top-left-radius: 32px;
    border-bottom-left-radius: 32px;
    box-shadow: -5px 5px 10px 1px rgba(0, 0, 0, 0.3);
  }`}
`;

export const Img = styled.img`
  width: 15px;
`;

export const ItemName = styled.div`
  font-size: 14px;
  margin-left: 30px;
`;
