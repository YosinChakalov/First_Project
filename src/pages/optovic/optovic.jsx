import React, { useRef } from 'react'
import izdeliya from "../../assets/images/izdeliya.webp"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/src/App.css";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import Card_1 from '../../components/card_1/card_1';
import medal from "/src/assets/images/medal.png";
import Card_4 from '../../components/card_4/card_4';
import kurka from "../../assets/images/kurtka.jpg";
import cert from "../../assets/images/cert.jpg";
import images from "../../assets/images/image.png";

const optovic = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }


  return (
    <section>
      <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={izdeliya} className="2xl:w-[100%] xl:w-[100%] lg:w-[100%]  md:w-[100%] sm:w-[100%] st:w-[100%]" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div>
      <div className='dark:text-[#eeeeee]'>
        <h1 className='text-[25px] font-[500] text-center py-[20px]'>{t("main.optovic.title_1")}</h1>
        <div className='flex justify-center gap-28 my-[30px] 2xl:flex-wrap xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap'>
        <Card_1 img={medal} text={t("main.optovic.text_1")} button={t('main.optovic.button')} />
        <Card_1 img={medal} text={t("main.optovic.text_2")} button={t('main.optovic.button')} />
        <Card_1 img={medal} text={t("main.optovic.text_3")} button={t('main.optovic.button')} />
        <Card_1 img={medal} text={t("main.optovic.text_4")} button={t('main.optovic.button')} />
        </div>
      </div>
      <div className='dark:text-[#eeeeee] bg-[white]'>
        <h1 className='text-[25px] font-[500] text-center py-[20px]'>{t('main.optovic.title_2')}</h1>
        <div className='flex justify-between py-[40px] w-[90%] m-auto '>
          <Card_4 img={kurka} title={t('main.optovic.card.name_1')} desc={t('main.optovic.card.text_1')} />
          <Card_4 img={kurka} title={t('main.optovic.card.name_2')} desc={t('main.optovic.card.text_2')} />
          <Card_4 img={kurka} title={t('main.optovic.card.name_3')} desc={t('main.optovic.card.text_3')} />
          <Card_4 img={kurka} title={t('main.optovic.card.name_4')} desc={t('main.optovic.card.text_4')} />
        </div>
      </div>
      <div className='dark:text-[#eeeeee] bg-[white]'>
        <div className='flex justify-between items-center w-[90%] m-auto'>
        <div className='pr-[150px]'>
          <h1 className='text-[25px] mb-[20px] font-[700]'>{t('main.optovic.certificat')}</h1>
          <p className='text-[18px]'>{t('main.optovic.text_cert')}</p>
        </div>
        <div className='w-[50%] flex items-center justify-center bg-[#dedede] p-[20px]'>
          <img src={cert} alt="" />
        </div>
        </div>
        <div className='flex justify-between items-center w-[90%] m-auto'>
        <div className='w-[50%] flex items-center justify-center bg-[#dedede] p-[20px]'>
          <img src={images} alt="" className='w-[1000000000000000px]' />
        </div>
        <div className='pl-[80px]'>
          <h1 className='text-[25px] mb-[20px] font-[700]'>{t('main.optovic.fast_ogruz')}</h1>
          <p className='text-[18px]'>{t('main.optovic.text_fast_ogruz')}</p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default optovic