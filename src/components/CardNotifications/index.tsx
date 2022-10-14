import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { INotificationsDTO } from "../../interfaces/INotifications/INotifications";
import Notification from "../Notification";
import {
  ContainerNotifications,
  Header,
  Space,
  Text,
  Title,
  Wrapper,
} from "./styles";

type Props = {
  closeCard: () => void;
  notifications: INotificationsDTO[];
};

const CardNotifications = ({ closeCard, notifications }: Props) => {
  return (
    <Wrapper>
      <Header>
        <Title>Notificações</Title>
        <AiOutlineClose onClick={closeCard} />
      </Header>
      <Space>
        <Text>Hoje</Text>
      </Space>
      <ContainerNotifications>
        {notifications.length > 0 &&
          notifications.map((notification) => (
            <Notification
              key={notification.id_notification}
              {...notification}
            />
          ))}
      </ContainerNotifications>
    </Wrapper>
  );
};

export default CardNotifications;
