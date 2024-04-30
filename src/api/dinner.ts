import { request } from "./fetch/request";

const baseURL = "https://nutritionback.onrender.com";

export const dinnerApi = {
  async getProducts(): Promise<[]> {
    return (
      await request(baseURL + `/dinner/products`).then((res) => res.json())
    ).dinnerproduct;
  },
  async getGroups(): Promise<[]> {
    return (await request(baseURL + `/dinner/groups`).then((res) => res.json()))
      .dinnergroup;
  },
  async getFoods(): Promise<[]> {
    return (await request(baseURL + `/dinner/foods`).then((res) => res.json()))
      .dinnerfood;
  },
};
