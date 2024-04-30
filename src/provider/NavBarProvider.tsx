import React, { createContext, useMemo, useState } from "react";
import { FullLang, Lang } from "../types/Lang";

export const NavBarContext = createContext<{
  lang: Lang;
  fullLang: FullLang;
  setLang: (newLang: Lang) => void;
}>({
  lang: "TJK",
  fullLang: "Tajik",
  setLang: () => {},
});

export const NavBarProvider = ({
  children,
}: {
  children: React.JSX.Element;
}) => {
  const [lang, setLang] = useState<Lang>(
    (localStorage.getItem("lang") as "ENG" & "TJK" & "UZB") || "TJK"
  );
  const fullLang = useMemo(
    () => (lang === "ENG" ? "English" : lang === "TJK" ? "Tajik" : "Uzbek"),
    [lang]
  );

  return (
    <NavBarContext.Provider
      value={{
        lang,
        fullLang,
        setLang: (newLang: Lang) => {
          localStorage.setItem("lang", newLang);
          setLang(newLang);
        },
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};
