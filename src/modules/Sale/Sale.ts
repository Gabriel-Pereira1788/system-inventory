import { uuid } from "uuidv4";

export class Sale {
  public readonly produto_id?: string;
  public readonly id_usuario?: string;
  public readonly id_sale?: string;
  public price?: string;
  public sales?: number;
  public date_sale?: Date;
  constructor(props: Omit<Sale, "id_sale">, id_sale?: string) {
    Object.assign(this, props);
    this.date_sale = new Date();
    if (id_sale) {
      this.id_sale = uuid();
    }
  }
}
