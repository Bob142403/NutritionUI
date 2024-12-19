import { useContext } from "react";
import { List, Typography } from "antd";

import { NavBarContext } from "../../provider/NavBarProvider";
import styles from "./category-page.style.module.css";
import { Categories } from "../../data/categories/Categories";

const { Title } = Typography;
export const CategoryPage = () => {
  const { lang } = useContext(NavBarContext);

  const groupName =
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

  return (
    <div className={styles.wrapper}>
      {Categories.map((category) => (
        <List
          key={category.id_group}
          header={
            <Title level={5} style={{ marginTop: "0" }}>
              {category[groupName]}
            </Title>
          }
          bordered
          dataSource={[category]}
          renderItem={(item) => <List.Item>{item[productName]}</List.Item>}
        />
      ))}
    </div>
  );
};
