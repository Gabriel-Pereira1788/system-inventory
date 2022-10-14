import * as yup from "yup";

export const schemaRegister = yup.object({
  name: yup.string().required("Campo Obrigatorio"),
  email: yup.string().email("Email invalido").required("Campo Obrigatorio"),
  password: yup
    .string()
    .min(5, "Minimo de 5 caracteres")
    .required("Campo obrigatorio"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senhas não coecidem."),
});
