import { Input, Select } from "antd";
import React from "react";

import { SERVICES } from "./../../constants/services";
import { CreditType } from "../Form/Form";
import {
  CountDescription,
  CreditContainer,
  Description,
  SelectsContainer,
} from "./Credit.styles";

interface CreditProps {
  credit: CreditType;
  credits: CreditType[];
  setCredits: React.Dispatch<React.SetStateAction<CreditType[]>>;
}

export const Credit = ({ credit, credits, setCredits }: CreditProps) => {
  const { type } = credit;

  const usedServices = credits.reduce<number[]>(
    (acc, curValue) => acc.concat(curValue.serviceIds),
    []
  );

  const options = SERVICES.map((service) => {
    const serviceType = service.price ? "price" : "wage";

    return {
      value: service.title,
      label: service.title,

      disabled:
        usedServices.includes(service.serviceId) ||
        (type !== null && type !== serviceType),
      type: serviceType,
      serviceId: service.serviceId,
    };
  });

  const handleChangeSelect = (value: string, option: any, service: number) => {
    setCredits((prev) => {
      return prev.map((el) => {
        if (el !== credit) return el;
        else
          return {
            ...credit,
            serviceIds: [
              ...credit.serviceIds.filter((el) => el !== service),
              option.serviceId,
            ],
            type: option.type,
          };
      });
    });
  };

  const handleChangeCredits = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredits((prev) => {
      return prev.map((el) => {
        if (el !== credit) return el;
        else
          return {
            ...credit,
            credits: Number(e.target.value),
          };
      });
    });
  };

  const handleAddService = () => {
    setCredits((prev) => {
      return prev.map((el) => {
        if (el !== credit) return el;
        else
          return {
            ...credit,
            serviceIds: [...new Set([...credit.serviceIds, 0])],
          };
      });
    });
  };

  return (
    <CreditContainer>
      <SelectsContainer>
        {credit.serviceIds?.map((service) => {
          return (
            <Select
              defaultValue={
                SERVICES.find((el) => el.serviceId === service)?.title
              }
              key={service}
              options={options}
              onChange={(value, option) => {
                handleChangeSelect(value, option, service);
              }}
            />
          );
        })}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-circle"
          viewBox="0 0 16 16"
          onClick={handleAddService}
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </SelectsContainer>
      <CountDescription>
        <Input
          defaultValue={credit.credits || 0}
          value={credit.credits}
          onChange={handleChangeCredits}
        />
        {type && (
          <Description>{type === "wage" ? "Hours" : "Classes"}</Description>
        )}
      </CountDescription>
    </CreditContainer>
  );
};
