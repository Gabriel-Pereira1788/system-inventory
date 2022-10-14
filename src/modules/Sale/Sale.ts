export class Sale {
  public readonly id_product?: string;
  public readonly id_user?: string;
  public price_saled?: number;
  public price_purchased?: number;
  public storage?: number;
  public sales?: number;
  public date_sale?: Date;
  constructor(props: Sale) {
    Object.assign(this, props);
    this.date_sale = new Date();
  }
}
