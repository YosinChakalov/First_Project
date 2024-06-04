import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useGetForBeautyQuery } from '../../api/todoApi/todoApi';
import { Button } from 'antd';
import AOS from "aos";
import "aos/dist/aos.css";

const forbeautyandhealth = () => {
  const { t, i18n } = useTranslation();
    function TranslateClick(lang) {
      i18n.changeLanguage(lang);
    }

    useEffect(() => {
      AOS.init();
    }, []);

    const {data, error, isLoading} = useGetForBeautyQuery()
  return (
    <section className='bg-white dark:bg-[#333] dark:text-[#eeeeee]'>
      <div>
      <div className='flex gap-3 font-[400] text-[18px] text-[#808080] w-[90%] m-auto'>
        <Link to={'/'}>
        <h1>{t('main.forBeautyAndHealth.path_1')}</h1>
        </Link>
        <h1>/</h1>
        <h1>{t('main.forBeautyAndHealth.path_2')}</h1>
        <h1>/</h1>
        <h1>{t('main.forBeautyAndHealth.path_3')}</h1>
      </div>
      <h1 className='text-[25px] text-center font-[600] py-[70px]'>{t('main.forBeautyAndHealth.title')}</h1>
      <div className='w-[90%] m-auto text-[20px] font-[600] flex flex-col justify-center pb-[70px]' data-aos="fade-right-down">
        <h1 className='pb-[7px] cursor-pointer dark:text-[#eeeeee] hover:text-[grey] '>{t('main.forBeautyAndHealth.link_1')}</h1>
        <h1 className='pb-[7px] cursor-pointer dark:text-[#eeeeee] hover:text-[grey] '>{t('main.forBeautyAndHealth.link_2')}</h1>
        <h1 className='pb-[7px] cursor-pointer dark:text-[#eeeeee] hover:text-[grey] '>{t('main.forBeautyAndHealth.link_3')}</h1>
        <h1 className='pb-[7px] cursor-pointer dark:text-[#eeeeee] hover:text-[grey] '>{t('main.forBeautyAndHealth.link_4')}</h1>
      </div>
      </div>
      <div className='flex justify-center gap-10 flex-wrap xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap w-[90%] m-auto' data-aos="fade-up-right">
      {data?.map((el) => {
          return (
            <div key={el.id} className="w-[280px] mb-[60px] m-auto">
              <img src={el.img} alt="" className="w-[100%]" />
              <h1 className="hover:text-[grey] cursor-pointer text-[17px] pt-[5px]">{el.name}</h1>
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
  )
}

export default forbeautyandhealth