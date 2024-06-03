import React, { useEffect } from "react";
import { useGetKidsQuery } from "../../api/kidsApi/kidsApi";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const childs = () => {
  const { data, error, isLoading } = useGetKidsQuery();

  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  useEffect(()=> {
    AOS.init()
  },[])

  console.log(data);

  return (
    <section className="bg-white dark:bg-[#333] dark:text-[#eeeeee]">
      <div className="flex gap-3 font-[400] text-[18px] pt-[15px] text-[#808080] w-[90%] m-auto">
        <Link to={'/'}>
        <h1>{t('main.childs.path_1')}</h1>
        </Link>
        <h1>/</h1>
        <h1>{t('main.childs.path_2')}</h1>
        <h1>/</h1>
        <h1>{t("main.childs.path_3")}</h1>
      </div>
      <div className="pt-[30px] w-[90%] m-auto">
        <h1 className="text-[23px] text-center font-[700]">{t('main.childs.title')}</h1>
        <div className="pt-[30px]" data-aos="fade-left">
          <h1 className="font-[700] mb-[7px]" >{t("main.childs.link_1")}</h1>
          <h1 className="font-[400] mb-[7px]">{t("main.childs.link_2")}</h1>
          <h1 className="font-[400]">{t("main.childs.link_3")}</h1>
        </div>
      </div>
      <div className="flex flex-wrap xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap w-[90%] m-auto justify-between pt-[100px]" data-aos="fade-up-right">
        {data?.map((el) => {
          return (
            <div key={el.id} className="w-[280px] mb-[60px] m-auto">
              <img src={el.img} alt="" className="w-[100%]" />
              <h1>{el.name}</h1>
              <div className="flex justify-between items-center h-[70px]">
                <h1 className="text-[18px] font-[700]">{el.price}</h1>
                <Button
                  size="medium"
                  className="button_1"
                  style={{
                    backgroundColor: "#111",
                    color: "white",
                    borderRadius: 0,
                  }}
                >
                  {t("main.optovic.button")}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default childs;
