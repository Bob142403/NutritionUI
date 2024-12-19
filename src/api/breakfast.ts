import qwe from "../../json/db.json";
import { BreakFastProductType } from "../types/breakfast/BreakFastProduct";
import { BreakFastGroupType } from "../types/breakfast/BreakFastGroup";

export const breakFastApi = {
  getProducts(): BreakFastProductType[] {
    return qwe.Product;
  },
  async getGroups(): Promise<BreakFastGroupType[]> {
    return Promise.resolve(qwe.BreakfastGroup);
  },
  async getFoods(): Promise<[]> {
    return Promise.resolve(qwe.Food) as any;
  },
};
