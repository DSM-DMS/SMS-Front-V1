import styled from 'styled-components';

export const Container = styled.div`
  width: 265px;
  height: 265px;
  padding: 20px;
  box-sizing: border-box;
  margin: 8px;
  border: 2px solid #dddddd;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.5s, background-color 1s;
  white-space: pre-wrap;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.7s opacity;
  }

  &:hover {
    & > img {
      opacity: 0.13;
    }
    transform: translateY(-20px);
    color: white;
    background-color: #5323b2;
  }

  > div:nth-child(1) {
    flex: 1;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CircleName = styled.div`
  font-weight: bolder;
`;

export const CircleIntroduce = styled.div`
  height: 40px;
  margin-top: 1px;
`;

export const WantedJob = styled.div`
  font-size: 14px;
  margin-top: 25px;
`;

export const Footer = styled.div`
  height: 50px;
  display: flex;

  > div:nth-child(1) {
    flex: 1;
  }
  > div:nth-child(2) {
    width: 85px;
    text-align: right;
  }
`;

export const Date = styled.div`
  display: flex;
  justify-content: space-between;
`;