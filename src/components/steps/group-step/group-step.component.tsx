import { Checkbox, Typography } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";

import { Type } from "../../../pages/breakfast-questions-page/breakfast-questions-page.component";
import styles from "./group-step.style.module.css";
import { FullLang } from "../../../types/Lang";

const { Title } = Typography;

export const GroupStep = ({
  groupTitle,
  selectedGroups,
  setSelectedGroups,
  groupList,
  lang,
}: {
  groupTitle: string;
  selectedGroups: string[];
  setSelectedGroups: React.Dispatch<React.SetStateAction<string[]>>;
  groupList: Type[];
  lang: FullLang;
}) => {
  // ---------------------------------------------------------------------------
  return (
    <div className={styles.firstQuestion}>
      {/* --------------------------------------------------------------------------- */}
      {/* GROUP TITLE */}
      {/* --------------------------------------------------------------------------- */}

      <Title level={5} style={{ marginTop: "0" }}>
        {groupTitle}
      </Title>

      {/* --------------------------------------------------------------------------- */}
      {/* GROUP LIST */}
      {/* --------------------------------------------------------------------------- */}

      <div className={styles.checkboxList}>
        {groupList.map((group, index) => (
          <Checkbox
            key={index}
            checked={selectedGroups.includes(group["name"])}
            onChange={(e: CheckboxChangeEvent) => {
              const isGroupChecked = e.target.checked;

              if (isGroupChecked)
                setSelectedGroups((prev) => [...prev, group["name"]]);
              else
                setSelectedGroups(
                  selectedGroups.filter((elem) => elem !== group["name"])
                );
            }}
          >
            {/* --------------------------------------------------------------------------- */}
            {/* GROUP NAME */}
            {/* --------------------------------------------------------------------------- */}

            {group[`label::${lang}`]}
          </Checkbox>
        ))}
      </div>
    </div>
  );
};
