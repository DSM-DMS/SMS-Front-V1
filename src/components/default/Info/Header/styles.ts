import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const FaceBookBtn = styled.button`
  background: #517aff;
  border: none;
  border-radius: 3px;
  padding: 10px 15px;
  color: white;
  display: flex;
  align-items: center;
  margin-left: 10px;

  img {
    margin-right: 5px;
  }
`;
