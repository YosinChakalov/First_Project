import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const cart = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <section className="bg-[white] dark:bg-[#333] dark:text-[#eeeeee]">
      <div className="flex gap-3 font-[400] text-[18px] text-[#808080] w-[90%] m-auto">
        <Link to={"/"}>
          <h1>{t("main.cart.path_1")}</h1>
        </Link>
        <h1>/</h1>
        <h1>{t("main.cart.path_2")}</h1>
      </div>
      <h1 className="text-center text-[25px] font-[600] py-[80px]">{t('main.cart.title')}</h1>
    </section>
  );
};

export default cart;
