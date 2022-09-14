import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Logout,
  Modal,
  UserContainer,
  UserEmail,
  UserName,
  WrapperIcon,
} from "./styles";
import { FaDoorOpen } from "react-icons/fa";
import { Paper } from "@mui/material";
import { RootState, useAppDispatch } from "../../store/store";
import { asyncLogoutUser } from "../../store/User/User.store";
import { useSelector } from "react-redux";

type Props = {
  openModal: boolean;
  handleClose: () => void;
};

const ModalUser = ({ openModal, handleClose }: Props) => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const handleLogoutUser = async () => {
    await dispatch(asyncLogoutUser());

    handleClose();
  };
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Paper
        style={{ height: "350px", textAlign: "center", width: "30%" }}
        elevation={3}
      >
        <UserContainer>
          <WrapperIcon>
            <AccountCircleIcon sx={{ fontSize: 120 }} />
          </WrapperIcon>
          <UserName>{user && user.name}</UserName>
          <UserEmail>{user && user.email}</UserEmail>
          <WrapperIcon>
            <Logout onClick={handleLogoutUser}>
              <FaDoorOpen size={30} />
            </Logout>
          </WrapperIcon>
        </UserContainer>
      </Paper>
    </Modal>
  );
};

export default ModalUser;
