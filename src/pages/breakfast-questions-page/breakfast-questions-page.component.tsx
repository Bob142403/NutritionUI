import { Button, Divider } from "antd";
import styles from "./breakfast-questions-page.style.module.css";
import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { breakfastcategory } from "../../utils/breakfastcategory";
import { CategoryContext } from "../../provider/CategoryProvider";
import { NavBarContext } from "../../provider/NavBarProvider";
import { language } from "../../lang/lang";
import { GroupStep } from "../../components/steps/group-step/group-step.component";
import { FoodStep } from "../../components/steps/food-step/food-step.component";
import { ProductStep } from "../../components/steps/product-step/product-step.component";
import { breakFastConsts } from "./breakfast-questions.const";
import { BreakFastGroup } from "../../data/breakfast/BreakFastGroup";
import { BreakFastFood } from "../../data/breakfast/BreakFastFood";
import { BreakFastProduct } from "../../data/breakfast/BreakFastProduct";

export interface Type {
  name: string;
  "label::English": string;
  "label::Tajik": string;
  "label::Uzbek": string;
  BreakfastGroup?: string;
  Food?: string;
  LunchGroup?: string;
  LunchFood?: string;
  DinnerFood?: string;
  DinnerGroup?: string;
}

export const BreakfastQuestionsPage = () => {
  // ---------------------------------------------------------------------------
  // Variables
  // ---------------------------------------------------------------------------

  const [step, setStep] = useState<"group" | "food" | "product">("group");
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [selectedFoods, setSelectedFoods] = useState<string[]>([]);
  const [seletedProducts, setSelectedProducts] = useState<string[]>([]);

  const navigate = useNavigate();
  const { setCategory } = useContext(CategoryContext);
  const { lang, fullLang } = useContext(NavBarContext);

  // ---------------------------------------------------------------------------
  // Questions
  // ---------------------------------------------------------------------------

  const { questionForGroup, questionForFood, questionForProduct } =
    breakFastConsts;

  // ---------------------------------------------------------------------------
  // Titles
  // ---------------------------------------------------------------------------

  const { groupTitle, foodTitle } = breakFastConsts;

  // ---------------------------------------------------------------------------
  // Food, Group, Product list
  // ---------------------------------------------------------------------------

  const breakfastGroupList = BreakFastGroup;

  const breakFastFoodList = useMemo(
    () =>
      BreakFastFood.filter(
        (food) =>
          selectedGroups.includes(food["BreakfastGroup"]) &&
          BreakFastProduct.filter((product) => food["name"] === product["Food"])
            .length > 1
      ),
    [selectedGroups]
  );
  const breakFastProductList = useMemo(
    () =>
      BreakFastProduct.filter((product) =>
        selectedFoods.includes(product["Food"])
      ),
    [selectedFoods]
  );

  // ---------------------------------------------------------------------------
  // Hidden Food, Group, Product
  // ---------------------------------------------------------------------------

  const hiddenFoods = useMemo(
    () =>
      BreakFastFood.filter(
        (food) =>
          selectedGroups.includes(food["BreakfastGroup"]) &&
          BreakFastProduct.filter((product) => food["name"] === product["Food"])
            .length <= 1
      ),
    [selectedGroups]
  );
  const hiddenProducts = useMemo(
    () =>
      BreakFastProduct.filter((product) =>
        hiddenFoods.map((food) => food.name).includes(product["Food"])
      ),
    [hiddenFoods]
  );
  const hiddenGroups = useMemo(
    () =>
      Array.from(
        new Set(hiddenFoods.map((food) => food["BreakfastGroup"]))
      ).map((food) =>
        breakfastGroupList.find((group) => group["name"] === food)
      ),
    [hiddenFoods]
  );

  // ---------------------------------------------------------------------------
  // effects
  // ---------------------------------------------------------------------------

  useEffect(() => {}, []);

  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------

  function prevButtonClick() {
    if (step === "food") setStep("group");
    if (step === "product") {
      setStep("food");
    }
  }

  function nextButtonClick() {
    if (step === "group") setStep("food");
    if (step === "food") setStep("product");
    if (step === "product") {
      setCategory(breakfastcategory(seletedProducts));
      navigate("/lunch");
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
            groupTitle={groupTitle[`label::${fullLang}`]}
            lang={fullLang}
            groupList={breakfastGroupList}
            selectedGroups={selectedGroups}
            setSelectedGroups={setSelectedGroups}
          />
        )}

        {/* --------------------------------------------------------------------------- */}
        {/* FOOD QUESTIONS */}
        {/* --------------------------------------------------------------------------- */}

        {step === "food" && (
          <FoodStep
            groupList={breakfastGroupList}
            selectedGroups={selectedGroups}
            foodTitle={foodTitle[`label::${fullLang}`]}
            lang={fullLang}
            foodList={breakFastFoodList}
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
            foodList={breakFastFoodList}
            selectedFoods={selectedFoods}
            lang={fullLang}
            productList={breakFastProductList}
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

          <Button type="primary" onClick={nextButtonClick}>
            {language["next"][lang]}
          </Button>
        </div>
      </div>
    </div>
  );
};
