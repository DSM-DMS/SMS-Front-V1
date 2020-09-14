import styled from 'styled-components';
import { Container, OutingItemContainer } from '../../header/styles';

export const ItemContainer = styled(Container)`
  background-color: white;
  font-weight: normal;
  font-size: 12px;
  border-top-width: 1px;
  border-top-color: #d3d3d3;

  div:nth-child(2) {
    text-align: left;
  }
`;

export const OutingContainer = styled(OutingItemContainer)`
  background-color: white;
  font-weight: normal;
  font-size: 12px;
  border-top-width: 1px;
  border-top-color: #d3d3d3;

  div:nth-child(5) {
    text-align: left;
  }
`;
