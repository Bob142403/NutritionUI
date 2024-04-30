import { useEffect, useState } from "react";
import { breakFastApi } from "../api/breakfast";
import { BreakFastProductType } from "../types/breakfast/BreakFastProduct";
import { BreakFastFoodType } from "../types/breakfast/BreakFastFood";

export const useBreakFastGroup = () => {
  const [breakFastGroup, setBreakFastGroup] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    console.log(
      "await breakFastApi.getGroups(): ",
      await breakFastApi.getGroups()
    );
    setBreakFastGroup(await breakFastApi.getGroups());
  }
  return breakFastGroup;
};

export const useBreakFastFood = (): BreakFastFoodType[] => {
  const [breakFastFood, setBreakFastFood] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setBreakFastFood(await breakFastApi.getFoods());
  }
  return breakFastFood;
};

export const useBreakFastProduct = (): BreakFastProductType[] => {
  const [breakFastProduct, setBreakFastProduct] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setBreakFastProduct(await breakFastApi.getProducts());
  }
  return breakFastProduct;
};
