import { User } from "firebase/auth";

export const dataStructureUser = (data: User, name?: string) => {
  const { email, uid, phoneNumber, displayName } = data;
  return {
    name: displayName || name,
    email,
    uid,
    phoneNumber,
  };
};
