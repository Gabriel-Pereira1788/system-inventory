import React, { useState } from "react";
import { Alert, WrapperIcon } from "./styles";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import CardNotifications from "../CardNotifications";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

type Props = {};

const ContainerNotifications = (props: Props) => {
  const { notifications } = useSelector(
    (slice: RootState) => slice.notifications
  );

  const [openNotifications, setOpenNotifications] = useState(false);

  const handleToggleDisplay = () => {
    setOpenNotifications(!openNotifications);
  };

  const notReadNotifications = notifications.some(
    (notification) => !notification.read
  );
  return (
    <>
      <WrapperIcon onClick={handleToggleDisplay}>
        {notReadNotifications && <Alert />}
        <NotificationImportantIcon />
      </WrapperIcon>
      {openNotifications && (
        <CardNotifications
          closeCard={handleToggleDisplay}
          notifications={notifications}
        />
      )}
    </>
  );
};

export default ContainerNotifications;
