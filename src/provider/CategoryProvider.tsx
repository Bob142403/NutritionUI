import React, { createContext, useState } from "react";
import { CategoryContextType, Groups } from "../types/Category";

export const groupsName: Groups[] = [
  "group1",
  "group2",
  "group3",
  "group4",
  "group5",
  "group6",
  "group7",
  "group8",
  "group9",
  "group10",
  // "group11",
  // "group12",
  // "group13",
];

export const defaultCategory: CategoryContextType = {
  group1: 0,
  group2: 0,
  group3: 0,
  group4: 0,
  group5: 0,
  group6: 0,
  group7: 0,
  group8: 0,
  group9: 0,
  group10: 0,
  // group11: 0,
  // group12: 0,
  // group13: 0,
};

export const concatCategory = (
  category: CategoryContextType,
  newCategory: CategoryContextType
): CategoryContextType => {
  const news = newCategory;

  groupsName.map((group) => {
    news[group] += category[group];
  });

  return news;
};

export const CategoryContext = createContext<{
  category: CategoryContextType;
  setCategory: (newCategory: CategoryContextType) => void;
  reset: () => void;
}>({
  category: defaultCategory,
  setCategory() {},
  reset() {},
});

export const CategoryProvider = ({
  children,
}: {
  children: React.JSX.Element;
}) => {
  const [category, setCategory1] =
    useState<CategoryContextType>(defaultCategory);

  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategory: (newCategory: CategoryContextType) => {
          setCategory1(concatCategory(category, newCategory));
        },
        reset: () => {
          setCategory1(defaultCategory);
        },
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
