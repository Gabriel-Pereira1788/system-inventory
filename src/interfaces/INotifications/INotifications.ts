export interface INotificationsDTO {
  createdAt: Date;
  id_notification: string;
  id_user: string;
  item_alert: string;
  type_notification: string;
  read: boolean;
}
