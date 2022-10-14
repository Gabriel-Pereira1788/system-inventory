import * as yup from "yup";

export const schemaEdit = yup.object({
  dataEdit: yup.object({
    show_name: yup.boolean().notRequired(),
    show_price_purchased: yup.boolean().notRequired(),
    show_price_saled: yup.boolean().notRequired(),
    name_product: yup.string().when("show_name", {
      is: true,
      then: yup.string().required(),
      otherwise: yup.string().notRequired(),
    }),
    price_purchased: yup.number().when("show_price_purchased", {
      is: true,
      then: yup.number().positive().required(),
      otherwise: yup.number().notRequired(),
    }),
    price_saled: yup.number().when("show_price_saled", {
      is: true,
      then: yup.number().positive().required(),
      otherwise: yup.number().notRequired(),
    }),
  }),
  dataSaled: yup.object({
    sale: yup.boolean().notRequired(),
    pieces_saled: yup.number().when("sale", {
      is: true,
      then: yup.number().positive().required(),
      otherwise: yup.number().notRequired(),
    }),
  }),
  dataPurchased: yup.object({
    purchase: yup.boolean().notRequired(),

    pieces_purchased: yup.number().when("purchase", {
      is: true,
      then: yup.number().positive().required(),
      otherwise: yup.number().notRequired(),
    }),
  }),
});
