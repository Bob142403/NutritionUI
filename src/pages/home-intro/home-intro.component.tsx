import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";

import { language } from "../../lang/lang";
import { NavBarContext } from "../../provider/NavBarProvider";
import {
  CategoryContext,
  defaultCategory,
} from "../../provider/CategoryProvider";

import styles from "./home-intro.style.module.css";

const { Title } = Typography;

export const HomeIntro = () => {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const navigate = useNavigate();
  const { lang } = useContext(NavBarContext);
  const { setCategory } = useContext(CategoryContext);
  // ---------------------------------------------------------------------------
  // effects
  // ---------------------------------------------------------------------------

  useEffect(() => {
    setCategory(defaultCategory);
  }, []);

  // ---------------------------------------------------------------------------
  return (
    <div className={styles.container}>
      <div className={styles.backgroudImage}></div>

      {/* --------------------------------------------------------------------------- */}
      {/* TITLE */}
      {/* --------------------------------------------------------------------------- */}

      <Title level={3}>{language["homeIntroAlert"][lang]}</Title>

      {/* --------------------------------------------------------------------------- */}
      {/* START BUTTON */}
      {/* --------------------------------------------------------------------------- */}

      <Button
        onClick={() => navigate("/breakfast")}
        size="large"
        type="primary"
        disabled={!localStorage.getItem("user")}
      >
        {language["startBtn"][lang]}
      </Button>
    </div>
  );
};
