import { IFormEdit } from "../interfaces/IForm/IFormEdit";

export const defaultEditForm: IFormEdit = {
  dataEdit: {
    show_name: false,
    show_price_saled: false,
    show_price_purchased: false,
    name_product: "",
    price_purchased: 0,
    price_saled: 0,
  },

  dataPurchased: {
    pieces_purchased: 0,
    purchase: false,
  },
  dataSaled: {
    pieces_saled: 0,
    sale: true,
  },
};
