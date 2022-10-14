import React from "react";
import { Link } from "react-router-dom";
import { NOTIFICATIONS } from "../../constants/notifications";
import { INotificationsDTO } from "../../interfaces/INotifications/INotifications";
import { asyncReadNotification } from "../../store/Notifications/Notifications.store";
import { useAppDispatch } from "../../store/store";
import { formatDate } from "../../utils/formatDate";
import {
  Alert,
  Container,
  ContainerDate,
  ContainerText,
  MessageNotification,
  Text,
  TypeNotification,
} from "./styles";

const Notification = (notification: INotificationsDTO) => {
  const { id_notification, type_notification, item_alert, createdAt, read } =
    notification;
  const getDate = new Date(createdAt);
  const dispatch = useAppDispatch();

  const handleReadNotification = () => {
    const newData: INotificationsDTO = { ...notification, read: true };
    dispatch(asyncReadNotification(newData, id_notification));
  };
  return (
    <Container>
      <ContainerText>
        {!read && <Alert />}
        <TypeNotification>{type_notification}</TypeNotification>
      </ContainerText>
      <Link to="/products">
        <MessageNotification onClick={handleReadNotification}>
          {type_notification === "repor estoque" &&
            NOTIFICATIONS.NOTIFICATION_STORAGE}
          {type_notification === "novo usuario" &&
            NOTIFICATIONS.NOTIFICATION_USER}
          <strong>{item_alert}</strong>.
        </MessageNotification>
      </Link>
      <ContainerDate>
        <Text>{formatDate(getDate)}</Text>
      </ContainerDate>
    </Container>
  );
};

export default Notification;
