import React from "react";
import { useGetMansQuery } from "../../api/mansApi/mansApi";
import { useTranslation } from "react-i18next";

const man = () => {
  const { data, error, isLoading } = useGetMansQuery();

  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  console.log(data);

  return (
    <section>
      <div>
        <div className="flex gap-3 font-[400] text-[18px] pt-[15px] text-[#808080] w-[90%] m-auto">
          <h1>{t("main.childs.path_1")}</h1>
          <h1>/</h1>
          <h1>{t("main.childs.path_2")}</h1>
          <h1>/</h1>
          <h1>{t("main.childs.path_3")}</h1>
        </div>
      </div>
      <div>
        <h1>{t('main.mans.title')}</h1>
        <div>
          
        </div>
      </div>
      <div>
        {data?.map((el) => {
          return (
            <div>
              <h1>{el.name}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default man;
