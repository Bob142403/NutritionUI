import { CategoryContextType } from "../types/Category";
import { groupsName } from "../provider/CategoryProvider";
import { CategoryType } from "../types/category/Category";
import { CategoriesProfitType } from "../types/CategoriesProfit";

export const helpMessageForCategories = (
  Categories: CategoryType[],
  category: CategoryContextType,
  lang: string
) => {
  const nameGroup =
    lang === "ENG"
      ? "Name_of_group"
      : lang === "TJK"
      ? "Name_of_10_group_tj"
      : "Name_of_10_group_uz";
  const productName =
    lang === "ENG"
      ? "Products"
      : lang === "TJK"
      ? "Products_tj"
      : "Products_uz";

  const result = [];

  for (let index = 0; index < Math.min(Categories.length, 10); index++) {
    if (category[groupsName[index]] === 0)
      result.push(
        `${Categories[index][nameGroup]}: ${Categories[index][productName]}`
      );
  }

  return result;
};

export const helpMessageForProfit = (
  CategoriesProfit: CategoriesProfitType[],
  category: CategoryContextType,
  lang: string
) => {
  const nameGroup =
    lang === "ENG" ? "en_profit" : lang === "TJK" ? "tj_profit" : "uz_profit";

  const result = [];

  for (let index = 1; index < Math.min(CategoriesProfit.length, 11); index++) {
    if (category[groupsName[index - 1]] === 0)
      result.push(
        `${CategoriesProfit[index][nameGroup]}: ${CategoriesProfit[index][nameGroup]}`
      );
  }

  return result;
};
