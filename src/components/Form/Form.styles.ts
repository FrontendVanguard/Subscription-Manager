import styled from "styled-components";
import { Button } from "antd";

import { COLORS } from "./../../constants/colors";

export const Title = styled.h3`
  font-size: 14px;
  color: ${COLORS.purple};
  font-weight: 400;
`;

export const FormContainer = styled.div`
  margin-top: 30px;
  padding: 36px 30px;
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 5px solid ${COLORS.lightGray};

  @media (max-width: 500px) {
    width: 100%;
    padding: 12px 0px;
  }
`;

export const ProductTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 4px;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const SubTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 3px;
  color: ${COLORS.gray};
`;

export const IncludingContainer = styled.div`
  border-top: 1px solid ${COLORS.gray + "33"};
  border-bottom: 1px solid ${COLORS.gray + "33"};
  margin-bottom: 32px;
  padding: 16px 0px;
  display: flex;
  flex-direction: column;

  button {
    max-width: 80px;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${COLORS.purple};
  color: #ffffff;
`;

export const ButtonsContainer = styled.div`
  align-self: flex-end;
  justify-content: space-between;
  display: flex;
  width: 140px;
`;
