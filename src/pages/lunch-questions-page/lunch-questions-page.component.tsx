import { Button, Divider } from "antd";
import styles from "./lunch-questions-page.style.module.css";
import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { lunchCategory } from "../../utils/lunchcategory";
import { CategoryContext } from "../../provider/CategoryProvider";
import { NavBarContext } from "../../provider/NavBarProvider";
import { language } from "../../lang/lang";
import { GroupStep } from "../../components/steps/group-step/group-step.component";
import { FoodStep } from "../../components/steps/food-step/food-step.component";
import { ProductStep } from "../../components/steps/product-step/product-step.component";
import { lunchConsts } from "./lunch-questions.const";
import { LunchGroup } from "../../data/lunch/LunchGroup";
import { LunchFood } from "../../data/lunch/LunchFood";
import { LunchProduct } from "../../data/lunch/LunchProduct";

export const LunchQuestionsPage = () => {
  // ---------------------------------------------------------------------------
  // Variables
  // ---------------------------------------------------------------------------

  const [step, setStep] = useState<"group" | "food" | "product">("group");
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [selectedFoods, setSelectedFoods] = useState<string[]>([]);
  const [seletedProducts, setSelectedProduct] = useState<string[]>([]);

  const { setCategory } = useContext(CategoryContext);
  const { lang, fullLang } = useContext(NavBarContext);
  const navigate = useNavigate();

  // ---------------------------------------------------------------------------
  // Questions
  // ---------------------------------------------------------------------------

  const { questionForGroup, questionForFood, questionForProduct } = lunchConsts;

  // ---------------------------------------------------------------------------
  // Titles
  // ---------------------------------------------------------------------------

  const { groupTitle, foodTitle } = lunchConsts;

  // ---------------------------------------------------------------------------
  // Food, Group, Product list
  // ---------------------------------------------------------------------------

  const lunchGroupList = LunchGroup;
  const lunchFoodList = useMemo(
    () =>
      LunchFood.filter(
        (food) =>
          selectedGroups.includes(food["LunchGroup"]) &&
          LunchProduct.filter(
            (product) => food["name"] === product["LunchFood"]
          ).length > 1
      ),
    [selectedGroups]
  );
  const lunchProductList = useMemo(
    () =>
      LunchProduct.filter((product) =>
        selectedFoods.includes(product["LunchFood"])
      ),
    [selectedFoods]
  );

  // ---------------------------------------------------------------------------
  // Hidden Food, Group, Product
  // ---------------------------------------------------------------------------

  const hiddenFoods = useMemo(
    () =>
      LunchFood.filter(
        (food) =>
          selectedGroups.includes(food["LunchGroup"]) &&
          LunchProduct.filter(
            (product) => food["name"] === product["LunchFood"]
          ).length <= 1
      ),
    [selectedGroups]
  );
  const hiddenProducts = useMemo(
    () =>
      LunchProduct.filter((product) =>
        hiddenFoods.map((food) => food.name).includes(product["LunchFood"])
      ),
    [hiddenFoods]
  );
  const hiddenGroups = useMemo(
    () =>
      Array.from(new Set(hiddenFoods.map((food) => food["LunchGroup"]))).map(
        (food) => lunchGroupList.find((group) => group["name"] === food)
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

  function nextButtonClick() {
    if (step === "group") setStep("food");
    if (step === "food") setStep("product");
    if (step === "product") {
      setCategory(lunchCategory(seletedProducts));
      navigate("/dinner");
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
            groupList={lunchGroupList}
            selectedGroups={selectedGroups}
            setSelectedGroups={setSelectedGroups}
          />
        )}

        {/* --------------------------------------------------------------------------- */}
        {/* FOOD QUESTIONS */}
        {/* --------------------------------------------------------------------------- */}

        {step === "food" && (
          <FoodStep
            groupList={lunchGroupList}
            selectedGroups={selectedGroups}
            foodTitle={foodTitle[`label::${fullLang}`]}
            lang={fullLang}
            foodList={lunchFoodList}
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
            foodList={lunchFoodList}
            selectedFoods={selectedFoods}
            lang={fullLang}
            productList={lunchProductList}
            selectedProducts={seletedProducts}
            setSelectedProducts={setSelectedProduct}
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
