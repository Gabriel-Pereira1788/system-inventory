import React, { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { Input, Label, Text } from "./styles";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

type Props = {
  text: string;
  defaultValue: string | number;
  name: "name_product" | "price_purchased" | "price_saled";
  stateField: boolean;
  editStateField: (
    name: "name_product" | "price_purchased" | "price_saled",
    value: boolean
  ) => () => void;
  register: UseFormRegister<{
    name_product: string;
    price_purchased: number;
    price_saled: number;
    sale: boolean;
    purchase: boolean;
  }>;
};

const InputEdit = ({
  text,
  register,
  name,
  editStateField,
  defaultValue,
  stateField,
}: Props) => {
  // const [edit, setEdit] = useState(false);
  const handleEditField = () => {
    // setValue(name, "");
    editStateField(name, !stateField);
    // setEdit(!edit);
  };
  return (
    <Label>
      <Text>{text}:</Text>
      {stateField && <Input type="text" {...register(name)} />}
      {!stateField && (
        <Input disabled type="text" placeholder={defaultValue.toString()} />
      )}
      <BsFillPencilFill
        onClick={editStateField(name, !stateField)}
        cursor="pointer"
      />
    </Label>
  );
};

export default InputEdit;
