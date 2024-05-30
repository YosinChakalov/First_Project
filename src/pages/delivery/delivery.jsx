import React from "react";
import { useTranslation } from "react-i18next";

const delivery = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <section className="bg-[white] pt-[10px] dark:bg-[#333] dark:text-[#eeeeee]">
      <div className="flex gap-3 font-[400] text-[20px] text-[#808080] w-[90%] m-auto">
        <h1>{t("main.delivery.path_1")}</h1>
        <h1>/</h1>
        <h1>{t("main.delivery.path_2")}</h1>
      </div>
      <h1 className="text-center text-[28px] font-[700]">
        {t("main.delivery.title")}
      </h1>
      <div className="w-[90%] m-auto text-[16px]">
        <h1 className="my-[30px]">{t("main.delivery.text_1")}</h1>
        <h1 className="mb-[30px]">{t("main.delivery.text_2")}</h1>
        <h1 className="mb-[30px] text-[22px]">
          {t("main.delivery.sub-title")}
        </h1>
        <div className="flex items-start">
          <div className="bg-[black] dark:bg-white w-[9px] h-[9px] rounded-[50%] mt-[8px] mr-[8px]"></div>
          <div>
            <h1 className="">{t("main.delivery.text_3")}</h1>
            <h1 className="">{t("main.delivery.text_4")}</h1>
            <h1 className="">{t("main.delivery.text_5")}</h1>
            <h1 className="">{t("main.delivery.text_6")}</h1>
            <h1 className="">{t("main.delivery.text_7")}</h1>
            <h1 className="mb-[30px]">{t("main.delivery.text_8")}</h1>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-[black] dark:bg-white w-[9px] h-[9px] rounded-[50%] mt-[8px] mr-[8px]"></div>
          <div>
            <h1 className="">{t("main.delivery.text_9")}</h1>
            <h1 className="">{t("main.delivery.text_10")}</h1>
            <h1 className="">{t("main.delivery.text_11")}</h1>
            <h1 className="mb-[30px]">{t("main.delivery.text_12")}</h1>
          </div>
        </div>
      </div>
      <div className="w-[90%] m-auto text-[16px]">
        <h1 className="mb-[10px] text-[22px]">
          {t("main.delivery.sub-title_2")}
        </h1>
        <h1 className="mb-[30px]">{t('main.delivery.text_13')}</h1>
        <div className="flex items-start">
          <div className="bg-[black] dark:bg-white w-[10px] h-[10px] rounded-[50%] mt-[8px] mr-[8px]"></div>
          <div>
            <h1 className="">{t("main.delivery.text_14")}</h1>
            <h1 className="">{t("main.delivery.text_15")}</h1>
            <h1 className="">{t("main.delivery.text_16")}</h1>
          </div>
        </div>
            <h1 className="py-[30px]"><span className="font-[600] mr-[5px]">{t('main.delivery.announce')}</span>{t("main.delivery.text_17")}</h1>
      </div>
      
    </section>
  );
};

export default delivery;
