import axios from "axios";

export const apiusers = import.meta.env.VITE_APP_API_USERS;

export const users = async () => {
  const dataUser = await axios.get(`${apiusers}`);
  console.log(dataUser);
};

