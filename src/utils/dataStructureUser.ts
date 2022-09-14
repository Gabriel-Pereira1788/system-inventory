import { User } from "firebase/auth";

export const dataStructureUser = (data: User, name?: string) => {
  console.log(data);
  const { email, uid, phoneNumber, displayName } = data;
  return {
    name: displayName || "",
    email,
    uid,
    phoneNumber,
  };
};
