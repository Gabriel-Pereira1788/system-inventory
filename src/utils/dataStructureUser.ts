import { User } from "firebase/auth";

export const dataStructureUser = (data: User, name?: string) => {
  const { email, uid, phoneNumber } = data;
  return {
    name,
    email,
    uid,
    phoneNumber,
  };
};
