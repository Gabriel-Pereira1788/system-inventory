import * as yup from "yup";

export const schemaProduct = yup.object({
  name_product: yup.string().required("Campo obrigatorio"),
  price_saled: yup.number(),
  price_purchased: yup.number(),
  storage: yup.number(),
});
