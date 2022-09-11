import {
  IFormEdit,
  IDataEdit,
  IDataSaled,
  IDataPurchased,
} from "../interfaces/IForm/IFormEdit";

type NewData = {
  dataEdit: null | IFormEdit;
  dataUpdateStorage: null | IFormEdit;
};

export const cleanValues = (data: IFormEdit) => {
  const { dataEdit, dataSaled, dataPurchased } = data;

  Object.keys(dataEdit).forEach((key) => {
    const keyForm = key as keyof IDataEdit;
    const isBoolean = typeof dataEdit[keyForm] === "boolean";
    if (dataEdit[keyForm] === "" || dataEdit[keyForm] === 0 || isBoolean) {
      delete dataEdit[keyForm];
    }
  });

  Object.keys(dataSaled).forEach((key) => {
    const keyForm = key as keyof IDataSaled;
    const isBoolean = typeof dataSaled[keyForm] === "boolean";
    if (dataSaled[keyForm] === 0 || isBoolean) {
      delete dataSaled[keyForm];
    }
  });

  Object.keys(dataPurchased).forEach((key) => {
    const keyForm = key as keyof IDataPurchased;
    const isBoolean = typeof dataPurchased[keyForm] === "boolean";

    if (dataPurchased[keyForm] === 0 || isBoolean) {
      delete dataPurchased[keyForm];
    }
  });

  return data;
};
