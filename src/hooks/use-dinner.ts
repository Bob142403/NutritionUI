import { useEffect, useState } from "react";
import { dinnerApi } from "../api/dinner";
import { DinnerFoodType } from "../types/dinner/DinnerFood";
import { DinnerProductType } from "../types/dinner/DinnerProduct";

export const useDinnerGroup = () => {
  const [dinnerGroup, setDinnerGroup] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setDinnerGroup(await dinnerApi.getGroups());
  }
  return dinnerGroup;
};

export const useDinnerFood = (): DinnerFoodType[] => {
  const [dinnerFood, setDinnerFood] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setDinnerFood(await dinnerApi.getFoods());
  }
  return dinnerFood;
};

export const useDinnerProduct = (): DinnerProductType[] => {
  const [dinnerProduct, setDinnerProduct] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setDinnerProduct(await dinnerApi.getProducts());
  }
  return dinnerProduct;
};
