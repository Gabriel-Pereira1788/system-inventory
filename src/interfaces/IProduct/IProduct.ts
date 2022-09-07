export interface ITestProduct {
  name: string;
  priceSale: number;
  storage: number;
  pricePurchased: number;
  date: Date;
}

// {
//     name: "tenis",
//     priceSale: 25.99,
//     storage: 50,
//     pricePurchased: 10.0,
//     date: new Date(2022, 5, 11),
//   },

export interface IProduct {
  id_product?: string;
  name_product: string;
  price_saled: number;
  storage: number;
  price_purchased: number;
  id_usuario: string;
}
