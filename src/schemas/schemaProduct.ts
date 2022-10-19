import * as yup from "yup";
import { formatValueSubmit } from "../utils/transformCurrency";

export const schemaProduct = yup.object({
  name_product: yup.string().required("Campo obrigatorio"),
  price_saled: yup
    .mixed()
    .transform(formatValueSubmit)
    .required("Campo Obrigatorio"),
  price_purchased: yup
    .mixed()
    .transform(formatValueSubmit)
    .required("Campo Obrigatorio"),
  storage: yup.number().required("Campo Obrigatorio"),
});
