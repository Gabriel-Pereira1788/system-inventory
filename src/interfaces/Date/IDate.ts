import { ISale } from "../ISale/ISale";

export interface IMonths {
  janeiro: any[];
  feveireiro: any[];
  março: any[];
  abril: any[];
  maio: any[];
  junho: any[];
  julho: any[];
  agosto: any[];
  setembro: any[];
  outubro: any[];
  novembro: any[];
  dezembro: any[];
}

export type keyMonths = keyof IMonths;

export interface IStatiticsPerMonth {
  best_selling: ISale;
  sales_amount: number;
  total_piece_sales: number;
}
