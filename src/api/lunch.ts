import { request } from "./fetch/request";

const baseURL = "http://localhost:5001";

export const lunchApi = {
  async getProducts(): Promise<[]> {
    return (
      await request(baseURL + `/lunch/products`).then((res) => res.json())
    ).lunchproduct;
  },
  async getGroups(): Promise<[]> {
    return (await request(baseURL + `/lunch/groups`).then((res) => res.json()))
      .lunchgroup;
  },
  async getFoods(): Promise<[]> {
    return (await request(baseURL + `/lunch/foods`).then((res) => res.json()))
      .lunchfood;
  },
};
