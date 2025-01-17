import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Divider } from "antd";

import { dinnercategory } from "../../utils/dinnercategory";
import {
  CategoryContext,
  concatCategory,
} from "../../provider/CategoryProvider";
import { categoryApi } from "../../api/category";
import { NavBarContext } from "../../provider/NavBarProvider";
import { language } from "../../lang/lang";
import { GroupStep } from "../../components/steps/group-step/group-step.component";
import { FoodStep } from "../../components/steps/food-step/food-step.component";
import { ProductStep } from "../../components/steps/product-step/product-step.component";
import styles from "./dinner-questions-page.style.module.css";
import { dinnerConsts } from "./dinner-questions.const";
import { DinnerFood } from "../../data/dinner/DinnerFood";
import { DinnerGroup } from "../../data/dinner/DinnerGroup";
import { DinnerProduct } from "../../data/dinner/DinnerProduct";

export const DinnerQuestionsPage = () => {
  // ---------------------------------------------------------------------------
  // Variables
  // ---------------------------------------------------------------------------

  const [step, setStep] = useState<"group" | "food" | "product">("group");
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [selectedFoods, setSelectedFoods] = useState<string[]>([]);
  const [seletedProducts, setSelectedProducts] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { setCategory, category } = useContext(CategoryContext);
  const { lang, fullLang } = useContext(NavBarContext);
  const navigate = useNavigate();

  // ---------------------------------------------------------------------------
  // Questions
  // ---------------------------------------------------------------------------

  const { questionForGroup, questionForFood, questionForProduct } =
    dinnerConsts;

  // ---------------------------------------------------------------------------
  // Titles
  // ---------------------------------------------------------------------------

  const { groupTitle, foodTitle } = dinnerConsts;

  // ---------------------------------------------------------------------------
  // Group, Food, Product list
  // ---------------------------------------------------------------------------

  const dinnerGroupList = DinnerGroup;
  const dinnerFoodList = useMemo(
    () =>
      DinnerFood.filter(
        (food) =>
          selectedGroups.includes(food["DinnerGroup"]) &&
          DinnerProduct.filter(
            (product) => food["name"] === product["DinnerFood"]
          ).length > 1
      ),
    [selectedGroups]
  );
  const dinnerProductList = useMemo(
    () =>
      DinnerProduct.filter((product) =>
        selectedFoods.includes(product["DinnerFood"])
      ),
    [selectedFoods]
  );

  // ---------------------------------------------------------------------------
  // Hidden Food, Group, Product
  // ---------------------------------------------------------------------------

  const hiddenFoods = useMemo(
    () =>
      DinnerFood.filter(
        (food) =>
          selectedGroups.includes(food["DinnerGroup"]) &&
          DinnerProduct.filter(
            (product) => food["name"] === product["DinnerFood"]
          ).length <= 1
      ),
    [selectedGroups]
  );

  const hiddenProducts = useMemo(
    () =>
      DinnerProduct.filter((product) =>
        hiddenFoods.map((food) => food.name).includes(product["DinnerFood"])
      ),
    [hiddenFoods]
  );

  const hiddenGroups = useMemo(
    () =>
      Array.from(new Set(hiddenFoods.map((food) => food["DinnerGroup"]))).map(
        (food) => dinnerGroupList.find((group) => group["name"] === food)
      ),
    [hiddenFoods]
  );

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------

  function prevButtonClick() {
    if (step === "food") setStep("group");
    if (step === "product") {
      setStep("food");
    }
  }

  async function nextButtonClick() {
    const user = JSON.parse(localStorage.getItem("user") || "");
    if (step === "group") setStep("food");
    if (step === "food") setStep("product");
    if (step === "product") {
      setCategory(dinnercategory(seletedProducts));

      setLoading(true);

      await categoryApi
        .insert({
          ...concatCategory(category, dinnercategory(seletedProducts)),
          userId: user.id,
          date: Date.now(),
        })
        .then(() => {
          setLoading(false);
        });

      navigate("/finish");
    }
  }

  if (!questionForGroup || !questionForFood || !questionForProduct)
    return <></>;

  // ---------------------------------------------------------------------------
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* --------------------------------------------------------------------------- */}
        {/* QUESTIONS */}
        {/* --------------------------------------------------------------------------- */}
        <Divider
          orientation="left"
          style={{ wordBreak: "normal", whiteSpace: "normal" }}
        >
          {step === "group"
            ? questionForGroup[`label::${fullLang}`]
            : step === "food"
            ? questionForFood[`label::${fullLang}`]
            : questionForProduct[`label::${fullLang}`]}
        </Divider>

        {/* --------------------------------------------------------------------------- */}
        {/* GROUP QUESTIONS */}
        {/* --------------------------------------------------------------------------- */}
        {step === "group" && (
          <GroupStep
            lang={fullLang}
            groupTitle={groupTitle[`label::${fullLang}`]}
            groupList={dinnerGroupList}
            selectedGroups={selectedGroups}
            setSelectedGroups={setSelectedGroups}
          />
        )}

        {/* --------------------------------------------------------------------------- */}
        {/* FOOD QUESTIONS */}
        {/* --------------------------------------------------------------------------- */}

        {step === "food" && (
          <FoodStep
            groupList={dinnerGroupList}
            selectedGroups={selectedGroups}
            lang={fullLang}
            foodTitle={foodTitle[`label::${fullLang}`]}
            foodList={dinnerFoodList}
            selectedFoods={selectedFoods}
            setSelectedFoods={setSelectedFoods}
          />
        )}

        {/* --------------------------------------------------------------------------- */}
        {/* PRODUCT QUESTIONS */}
        {/* --------------------------------------------------------------------------- */}

        {step === "product" && (
          <ProductStep
            hiddenGroups={hiddenGroups}
            hiddenFoods={hiddenFoods}
            hiddenProducts={hiddenProducts}
            foodList={dinnerFoodList}
            selectedFoods={selectedFoods}
            lang={fullLang}
            productList={dinnerProductList}
            selectedProducts={seletedProducts}
            setSelectedProducts={setSelectedProducts}
          />
        )}
        {/* --------------------------------------------------------------------------- */}
        {/* ACTIONS  */}
        {/* --------------------------------------------------------------------------- */}

        <div className={styles.btnWrapper}>
          {/* --------------------------------------------------------------------------- */}
          {/* PREVIOS BUTTON */}
          {/* --------------------------------------------------------------------------- */}

          <div>
            {step !== "group" && (
              <Button hidden type="primary" onClick={prevButtonClick}>
                {language["previos"][lang]}
              </Button>
            )}
          </div>

          {/* --------------------------------------------------------------------------- */}
          {/* NEXT BUTTON */}
          {/* --------------------------------------------------------------------------- */}

          <Button
            type="primary"
            loading={loading}
            disabled={loading}
            onClick={nextButtonClick}
          >
            {language["next"][lang]}
          </Button>
        </div>
      </div>
    </div>
  );
};
