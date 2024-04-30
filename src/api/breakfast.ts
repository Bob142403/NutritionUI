import { request } from "./fetch/request";

const baseURL = "https://nutritionback.onrender.com";

export const breakFastApi = {
  async getProducts(): Promise<[]> {
    return (
      await request(baseURL + `/breakfast/products`).then((res) => res.json())
    ).breakfastproduct;
  },
  async getGroups(): Promise<[]> {
    return (
      await request(baseURL + `/breakfast/groups`).then((res) => res.json())
    ).breakfastgroup;
  },
  async getFoods(): Promise<[]> {
    return (
      await request(baseURL + `/breakfast/foods`).then((res) => res.json())
    ).breakfastfood;
  },
};
