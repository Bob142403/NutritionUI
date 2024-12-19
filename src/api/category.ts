import { CategoryContextType } from "../types/Category";
import { request } from "./fetch/request";

const baseURL = "https://nutritionback-lsmy.onrender.com/category";

export const categoryApi = {
  insert: async (category: CategoryContextType) =>
    await request(baseURL + "/insert", {
      method: "POST",
      body: JSON.stringify(category),
    }),

  async getCategory(userId: string): Promise<CategoryContextType[]> {
    return (await request(baseURL + `/get/${userId}`).then((res) => res.json()))
      .rows;
  },
};
