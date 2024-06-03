import React, { useEffect } from "react";
import { useGetMansQuery } from "../../api/mansApi/mansApi";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const man = () => {
  const { data, error, isLoading } = useGetMansQuery();

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
      <div>
        <div className="flex gap-3 font-[400] text-[18px] pt-[15px] text-[#808080] w-[90%] m-auto">
        <Link to={'/'}>
        <h1>{t('main.mans.path_1')}</h1>
        </Link>
        <h1>/</h1>
        <h1>{t('main.mans.path_2')}</h1>
          <h1>/</h1>
          <h1>{t("main.mans.path_3")}</h1>
        </div>
      </div>
      <div>
        <h1 className="text-[25px] text-center font-[600] py-[50px]">{t('main.mans.title')}</h1>
        <div className="flex w-[90%] m-auto justify-between flex-wrap xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap">
          <ul className="mb-[20px]">
            <li className="hover:text-[grey] text-[18px] transition pb-[8px] font-[600]">{t('main.mans.link_title_1')}</li>
            <li className="text-[16px] border-b-1 hover:text-[grey] mb-[7px] transition cursor-pointer font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] hover:border-b-1 ">{t('main.mans.link_2')}</li>
            <li className="text-[16px] border-b-1 hover:text-[grey] mb-[7px] transition cursor-pointer font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] hover:border-b-1 ">{t('main.mans.link_3')}</li>
            <li className="text-[16px] border-b-1 hover:text-[grey] mb-[7px] transition cursor-pointer font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] hover:border-b-1 ">{t('main.mans.link_4')}</li>
            <li className="text-[16px] border-b-1 hover:text-[grey] mb-[7px] transition cursor-pointer font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] hover:border-b-1 ">{t('main.mans.link_5')}</li>
            <li className="text-[16px] border-b-1 hover:text-[grey] mb-[7px] transition cursor-pointer font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] hover:border-b-1 ">{t('main.mans.link_6')}</li>
          </ul>
          <ul className="mb-[20px]" data-aos='fade-up'>
            <li className="hover:text-[grey] text-[18px] transition pb-[8px] font-[600]">{t('main.mans.link_title_2')}</li>
            <li className="text-[16px] border-b-1 hover:text-[grey] mb-[7px] transition cursor-pointer font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] hover:border-b-1 ">{t('main.mans.link_7')}</li>
            <li className="text-[16px] border-b-1 hover:text-[grey] mb-[7px] transition cursor-pointer font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] hover:border-b-1 ">{t('main.mans.link_8')}</li>
            <li className="text-[16px] border-b-1 hover:text-[grey] mb-[7px] transition cursor-pointer font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] hover:border-b-1 ">{t('main.mans.link_9')}</li>
            <li className="text-[16px] border-b-1 hover:text-[grey] mb-[7px] transition cursor-pointer font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] hover:border-b-1 ">{t('main.mans.link_10')}</li>
            <li className="text-[16px] border-b-1 hover:text-[grey] mb-[7px] transition cursor-pointer font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] hover:border-b-1 ">{t('main.mans.link_11')}</li>
          </ul>
          <ul className="mb-[20px]" data-aos='fade-down'>
            <li className="hover:text-[grey] text-[18px] transition pb-[8px] font-[600]">{t('main.mans.link_title_3')}</li>
            <li className="text-[16px] border-b-1 hover:text-[grey] mb-[7px] transition cursor-pointer font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] hover:border-b-1 ">{t('main.mans.link_12')}</li>
            <li className="text-[16px] border-b-1 hover:text-[grey] mb-[7px] transition cursor-pointer font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] hover:border-b-1 ">{t('main.mans.link_13')}</li>
          </ul>
          <ul className="mb-[20px]" data-aos='fade-left'>
            <li className="hover:text-[grey] text-[18px] transition pb-[8px] font-[600]">{t('main.mans.link_title_4')}</li>
            <li className="text-[16px] border-b-1 hover:text-[grey] mb-[7px] transition cursor-pointer font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] hover:border-b-1 ">{t('main.mans.link_15')}</li>
            <li className="text-[16px] border-b-1 hover:text-[grey] mb-[7px] transition cursor-pointer font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] hover:border-b-1 ">{t('main.mans.link_16')}</li>
            <li className="text-[16px] border-b-1 hover:text-[grey] mb-[7px] transition cursor-pointer font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] hover:border-b-1 ">{t('main.mans.link_17')}</li>
            <li className="text-[16px] border-b-1 hover:text-[grey] mb-[7px] transition cursor-pointer font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] hover:border-b-1 ">{t('main.mans.link_18')}</li>
          </ul>
        </div>
      </div>
      <div className="flex w-[90%] m-auto justify-between flex-wrap xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap pt-[100px]" data-aos="fade-down-right">
        {data?.map((el) => {
          return (
            <div key={el.id} className="w-[280px] mb-[60px] m-auto">
              <img src={el.img} alt="" className="w-[100%]" />
              <h1 className="hover:text-[grey] cursor-pointer">{el.name}</h1>
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

export default man;
