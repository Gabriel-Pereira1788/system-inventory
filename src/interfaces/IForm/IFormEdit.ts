export interface IDataEdit {
  show_name: boolean;
  show_price_saled: boolean;
  show_price_purchased: boolean;
  name_product: string;
  price_purchased: number;
  price_saled: number;
}

export interface IDataSaled {
  pieces_saled: number;
  sale: boolean;
}

export interface IDataPurchased {
  pieces_purchased: number;
  purchase: boolean;
}

export interface IFormEdit {
  dataEdit: IDataEdit;
  dataSaled: IDataSaled;
  dataPurchased: IDataPurchased;
}
