import * as yup from "yup";
import { regEmail } from "../utils/emailValidation";

export const schemaLogin = yup.object({
  email: yup.string().email().required("Campo Obrigatorio"),
  password: yup.string().required("Campo Obrigatorio"),
});
