import React from "react";
import { Link } from "react-router-dom";
import { NOTIFICATIONS } from "../../constants/notifications";
import { INotificationsDTO } from "../../interfaces/INotifications/INotifications";
import { Container, MessageNotification, TypeNotification } from "./styles";

type Props = {};

const Notification = ({ type_notification, item_alert }: INotificationsDTO) => {
  return (
    <Container>
      <TypeNotification>{type_notification}</TypeNotification>
      <Link to="/products">
        <MessageNotification>
          {type_notification === "repor estoque" &&
            NOTIFICATIONS.NOTIFICATION_STORAGE}
          {type_notification === "novo usuario" &&
            NOTIFICATIONS.NOTIFICATION_USER}
          <strong>{item_alert}</strong>.
        </MessageNotification>
      </Link>
    </Container>
  );
};

export default Notification;
