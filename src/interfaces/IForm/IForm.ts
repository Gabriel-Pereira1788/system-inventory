export interface IForm {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export const initialValue: IForm = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const initialValueLogin: IForm = {
  email: "",
  password: "",
};
