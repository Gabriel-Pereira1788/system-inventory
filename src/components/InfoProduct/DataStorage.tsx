import React from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IFormEdit } from "../../interfaces/IForm/IFormEdit";

import { Input, Label, Text } from "./styles";

type Props = {
  register: UseFormRegister<IFormEdit>;
  setValue: UseFormSetValue<IFormEdit>;
  watchSale: boolean;
  watchPurchase: boolean;
};

const DataStorage = ({
  register,
  setValue,
  watchSale,
  watchPurchase,
}: Props) => {
  return (
    <>
      <Label>
        <Text>Vendas:</Text>
        {watchSale &&
          (() => {
            setValue("dataSaled.pieces_saled", 0);
            return (
              <Input
                type="number"
                placeholder="Vender"
                {...register("dataSaled.pieces_saled")}
              />
            );
          })()}
        {!watchSale &&
          (() => {
            setValue("dataSaled.pieces_saled", 0);
            return <Input type="number" disabled placeholder="Vender" />;
          })()}
        <input
          type="checkbox"
          className="check"
          {...register("dataSaled.sale")}
        />
      </Label>
      <Label>
        <Text>Reposição:</Text>
        {watchPurchase &&
          (() => {
            setValue("dataPurchased.pieces_purchased", 0);
            return (
              <Input
                type="number"
                placeholder="repor estoque?"
                {...register("dataPurchased.pieces_purchased")}
              />
            );
          })()}
        {!watchPurchase &&
          (() => {
            setValue("dataPurchased.pieces_purchased", 0);
            return (
              <Input type="number" disabled placeholder="repor estoque?" />
            );
          })()}
        <input
          type="checkbox"
          className="check"
          {...register("dataPurchased.purchase")}
        />
      </Label>
    </>
  );
};

export default DataStorage;
