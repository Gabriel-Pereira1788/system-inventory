export class Product {
  public price_purchased?: number;
  public price_saled?: number;
  public name_product?: string;
  public storage?: number;
  public id_usuario?: string;
  constructor(props: Omit<Product, "produto_id">) {
    Object.assign(this, props);
  }
}
