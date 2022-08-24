import { User } from "firebase/auth";

export const dataStructureUser = (data: User) => {
  const { email, uid, phoneNumber } = data;
  return {
    email,
    uid,
    phoneNumber,
  };
};
