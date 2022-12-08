import axios from "axios";

export const apiusers = import.meta.env.VITE_APP_API_USERS;
export const apicampaign = import.meta.env.VITE_APP_API_CAMPAIGN;

export const users = async () => {
  const dataUser = await axios.get(`${apiusers}`);
  console.log(dataUser);
};

export const campaign = async () => {
  const campaign = await axios.get(`${apicampaign}`);
  console.log(campaign);
};
