import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 90px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const P = styled.p`
  font-size: 25px;
`;

export const Flex = styled.div`
  display: flex;
`;

export const Left = styled.div`
  flex: 7;
  padding-right: 150px;
`;

export const Right = styled.div`
  flex: 3;

  img {
    width: 100%;
  }
`;

export const Color = styled.p`
  color: #888888;

  b {
    font-weight: bold;
  }
`;

export const HashTag = styled.div`
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 3px 5px;
  color: #888888;
  margin: 0 2px;
  display: inline-block;
`;

export const H3 = styled.h3`
  margin-bottom: 10px;
  font-weight: bold;
`;
