import qwe from "../../json/db.json";

export const lunchApi = {
  async getProducts(): Promise<[]> {
    return Promise.resolve(qwe.LunchProduct) as any;
  },
  async getGroups(): Promise<[]> {
    return Promise.resolve(qwe.LunchGroup) as any;
  },
  async getFoods(): Promise<[]> {
    return Promise.resolve(qwe.LunchFoods) as any;
  },
};
