import styled from "styled-components";

import { COLORS } from "./../../constants/colors";

export const CreditContainer = styled.div`
  margin-bottom: 6px;
  display: flex;
  background-color: ${COLORS.lightGray};
  padding: 8px 12px;
  gap: 5px;
`;

export const SelectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  .ant-select {
    width: 250px;
    @media (max-width: 350px) {
      width: 200px;
    }
  }

  svg {
    align-self: center;
    cursor: pointer;
    path {
      fill: ${COLORS.purple};
    }
  }
`;

export const Description = styled.span`
  color: ${COLORS.gray};
  font-size: 12px;
`;

export const CountDescription = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  align-items: flex-start;
  input {
    width: 33px;
  }
  span {
    padding-top: 9px;
  }
`;
