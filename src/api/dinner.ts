import qwe from "../../json/db.json";

export const dinnerApi = {
  async getProducts(): Promise<[]> {
    return Promise.resolve(qwe.DinnerProduct) as any;
  },
  async getGroups(): Promise<[]> {
    return Promise.resolve(qwe.DinnerGroup) as any;
  },
  async getFoods(): Promise<[]> {
    return Promise.resolve(qwe.DinnerFood) as any;
  },
};
