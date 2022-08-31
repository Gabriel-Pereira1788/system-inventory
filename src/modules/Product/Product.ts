import { uuid } from "uuidv4";

export class Product {
  public readonly produto_id?: string;
  public pricePurchased?: number;
  public priceSaled?: number;
  public name?: string;
  public quantity?: number;
  public id_usuario?: string;
  constructor(props: Omit<Product, "produto_id">, produto_id?: string) {
    Object.assign(this, props);
    if (produto_id) {
      this.produto_id = uuid();
    }
  }
}
