import { useEffect, useState } from "react";
import { lunchApi } from "../api/lunch";
import { LunchFoodType } from "../types/lunch/LunchFood";
import { LunchProductType } from "../types/lunch/LunchProduct";

export const useLunchGroup = () => {
  const [lunchGroup, setLunchGroup] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLunchGroup(await lunchApi.getGroups());
  }
  return lunchGroup;
};

export const useLunchFood = (): LunchFoodType[] => {
  const [lunchFood, setLunchFood] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLunchFood(await lunchApi.getFoods());
  }
  return lunchFood;
};

export const useLunchProduct = (): LunchProductType[] => {
  const [lunchProduct, setLunchProduct] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLunchProduct(await lunchApi.getProducts());
  }
  return lunchProduct;
};
