import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { Input, Label, Text } from "./styles";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IFormEdit } from "../../interfaces/IForm/IFormEdit";
import { IProduct } from "../../interfaces/IProduct/IProduct";

type Props = {
  register: UseFormRegister<IFormEdit>;
  setValue: UseFormSetValue<IFormEdit>;
  defaultValues: IProduct;
  watchName: boolean;
  watchPriceSaled: boolean;
  watchPricePurchased: boolean;
};

const DataEdit = ({
  register,
  setValue,
  defaultValues,
  watchName,
  watchPricePurchased,
  watchPriceSaled,
}: Props) => {
  const handleSetEditState = (
    name:
      | "dataEdit.name_product"
      | "dataEdit.price_purchased"
      | "dataEdit.price_saled",
    nameState:
      | "dataEdit.show_name"
      | "dataEdit.show_price_saled"
      | "dataEdit.show_price_purchased",
    watchValue: boolean
  ) => {
    return () => {
      name === "dataEdit.name_product" ? setValue(name, "") : setValue(name, 0);

      setValue(nameState, watchValue);
    };
  };
  return (
    <>
      <Label>
        <Text>Nome:</Text>
        {watchName && (
          <Input type="text" {...register("dataEdit.name_product")} />
        )}
        {!watchName && (
          <Input
            disabled
            type="text"
            placeholder={defaultValues.name_product.toString()}
          />
        )}
        <BsFillPencilFill
          onClick={handleSetEditState(
            "dataEdit.name_product",
            "dataEdit.show_name",
            !watchName
          )}
          cursor="pointer"
        />
      </Label>
      <Label>
        <Text>Preço.C:</Text>
        {watchPricePurchased && (
          <Input
            type="number"
            step="0.1"
            {...register("dataEdit.price_purchased")}
          />
        )}
        {!watchPricePurchased && (
          <Input
            disabled
            type="number"
            step="0.1"
            placeholder={defaultValues.price_purchased.toString()}
          />
        )}
        <BsFillPencilFill
          onClick={handleSetEditState(
            "dataEdit.price_purchased",
            "dataEdit.show_price_purchased",
            !watchPricePurchased
          )}
          cursor="pointer"
        />
      </Label>
      <Label>
        <Text>Preço.V:</Text>
        {watchPriceSaled && (
          <Input type="text" {...register("dataEdit.price_saled")} />
        )}
        {!watchPriceSaled && (
          <Input
            disabled
            type="number"
            step="0.1"
            placeholder={defaultValues.price_saled.toString()}
          />
        )}
        <BsFillPencilFill
          onClick={handleSetEditState(
            "dataEdit.price_saled",
            "dataEdit.show_price_saled",
            !watchPriceSaled
          )}
          cursor="pointer"
        />
      </Label>
    </>
  );
};

export default DataEdit;
