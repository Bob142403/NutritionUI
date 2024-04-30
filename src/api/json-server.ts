import { CategoriesProfitType } from "../types/CategoriesProfit";
import { DistrictType } from "../types/District";
import { BreakFastFoodType } from "../types/breakfast/BreakFastFood";
import { BreakFastGroupType } from "../types/breakfast/BreakFastGroup";
import { BreakFastProductType } from "../types/breakfast/BreakFastProduct";
import { CategoryType } from "../types/category/Category";
import { DinnerFoodType } from "../types/dinner/DinnerFood";
import { DinnerGroupType } from "../types/dinner/DinnerGroup";
import { DinnerProductType } from "../types/dinner/DinnerProduct";
import { LunchFoodType } from "../types/lunch/LunchFood";
import { LunchGroupType } from "../types/lunch/LunchGroup";
import { LunchProductType } from "../types/lunch/LunchProduct";
import { request } from "./fetch/request";

const baseURL = "http://localhost:3000/";

const jsonServerOptions = {
  method: "GET",
  headers: {},
};

export const jsonServertApi = {
  async getBreakfastGroup(): Promise<BreakFastGroupType[]> {
    return await request(baseURL + `BreakfastGroup`, jsonServerOptions).then(
      (res) => res.json()
    );
  },

  async getBreakfastFood(): Promise<BreakFastFoodType[]> {
    return await request(baseURL + `Food`, jsonServerOptions).then((res) =>
      res.json()
    );
  },

  async getBreakfastProduct(): Promise<BreakFastProductType[]> {
    return await request(baseURL + `Product`, jsonServerOptions).then((res) =>
      res.json()
    );
  },

  async getLunchGroup(): Promise<LunchGroupType[]> {
    return await request(baseURL + `LunchGroup`, jsonServerOptions).then(
      (res) => res.json()
    );
  },

  async getLunchFoods(): Promise<LunchFoodType[]> {
    return await request(baseURL + `LunchFoods`, jsonServerOptions).then(
      (res) => res.json()
    );
  },

  async getLunchProduct(): Promise<LunchProductType[]> {
    return await request(baseURL + `LunchProduct`, jsonServerOptions).then(
      (res) => res.json()
    );
  },

  async getDinnerGroup(): Promise<DinnerGroupType[]> {
    return await request(baseURL + `DinnerGroup`, jsonServerOptions).then(
      (res) => res.json()
    );
  },

  async getDinnerFood(): Promise<DinnerFoodType[]> {
    return await request(baseURL + `DinnerFood`, jsonServerOptions).then(
      (res) => res.json()
    );
  },

  async getDinnerProduct(): Promise<DinnerProductType[]> {
    return await request(baseURL + `DinnerProduct`, jsonServerOptions).then(
      (res) => res.json()
    );
  },

  async getDistrict(): Promise<DistrictType[]> {
    return await request(baseURL + `district`, jsonServerOptions).then((res) =>
      res.json()
    );
  },

  async getCategories(): Promise<CategoryType[]> {
    return await request(baseURL + `Categories`, jsonServerOptions).then(
      (res) => res.json()
    );
  },

  async getCategoriesProfit(): Promise<CategoriesProfitType[]> {
    return await request(baseURL + `CategoriesProfit`, jsonServerOptions).then(
      (res) => res.json()
    );
  },
};
