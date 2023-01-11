import { Button, Input } from "antd";
import React from "react";

import { Credit } from "../Credit/Credit";
import {
  FormContainer,
  IncludingContainer,
  SubTitle,
  ProductTitleContainer,
  Title,
  PrimaryButton,
  ButtonsContainer,
} from "./Form.styles";

export interface CreditType {
  type: "wage" | "price" | null;
  credits: number;
  serviceIds: number[];
}

export const Form: React.FC = () => {
  const [credits, setCredits] = React.useState<CreditType[]>([]);

  const [title, setTitle] = React.useState("");

  const handleAdd = () => {
    setCredits([...credits, { type: null, credits: 0, serviceIds: [0] }]);
  };

  const handleReset = () => {
    setCredits([]);
    setTitle("");
  };

  const handleSubmit = () => {
    console.log({
      subscription: {
        title: title,
      },
      credits: [
        credits.map((credit) => {
          return {
            credits:
              credit.type === "wage" ? credit.credits * 60 : credit.credits,
            serviceIds: credit.serviceIds.filter((id) => id !== 0),
          };
        }),
      ],
    });
  };

  return (
    <FormContainer>
      <Title>Subscription</Title>
      <ProductTitleContainer>
        <SubTitle>Title</SubTitle>
        <Input
          placeholder="Product Title"
          value={title}
          onChange={(event) => {
            setTitle(event?.target.value);
          }}
        />
      </ProductTitleContainer>
      <IncludingContainer>
        <SubTitle>Including</SubTitle>
        {credits.map((credit, idx) => (
          <Credit
            credit={credit}
            key={idx}
            credits={credits}
            setCredits={setCredits}
          />
        ))}
        <PrimaryButton onClick={handleAdd}>+ Add</PrimaryButton>
      </IncludingContainer>
      <ButtonsContainer>
        <Button onClick={handleReset}>Cancel</Button>
        <PrimaryButton onClick={handleSubmit}>Save</PrimaryButton>
      </ButtonsContainer>
    </FormContainer>
  );
};
