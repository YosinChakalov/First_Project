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
import Card_5 from '../../components/card_5/card_5';
import { Button, TextField } from '@mui/material';
import Card_6 from '../../components/card_6/card_6';
import quotes from "../../assets/images/quotes.png";


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
    <section className='2xl:w-[100%] xl:w-[100%] lg:w-[100%]  md:w-[100%] sm:w-[100%] st:w-[100%]'>
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
      <div className='bg-[white]  dark:bg-[#333] dark:text-[#eeeeee]'>
        <h1 className='text-[25px] font-[500] text-center py-[20px]'>{t('main.optovic.title_2')}</h1>
        <div className='flex justify-between py-[40px] w-[90%] m-auto flex-wrap xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap '>
          <Card_4 img={kurka} title={t('main.optovic.card.name_1')} desc={t('main.optovic.card.text_1')} />
          <Card_4 img={kurka} title={t('main.optovic.card.name_2')} desc={t('main.optovic.card.text_2')} />
          <Card_4 img={kurka} title={t('main.optovic.card.name_3')} desc={t('main.optovic.card.text_3')} />
          <Card_4 img={kurka} title={t('main.optovic.card.name_4')} desc={t('main.optovic.card.text_4')} />
        </div>
      </div>
      <div className='bg-[white] 2xl:flex-wrap xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap dark:bg-[#333] dark:text-[#eeeeee]'>
        <div className='flex justify-between items-center 2xl:flex-wrap xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap w-[90%] m-auto mb-[40px]'>
        <div className='pr-[150px]'>
          <h1 className='text-[25px] mb-[20px] font-[600]'>{t('main.optovic.certificat')}</h1>
          <p className='text-[18px] mb-[10px]'>{t('main.optovic.text_cert')}</p>
        </div>
        <div className='w-[50%] flex items-center justify-center bg-[#dedede] p-[20px] mb-[20px]'>
          <img src={cert} alt="" />
        </div>
        </div>
        <div className='flex justify-between 2xl:flex-wrap xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap items-center w-[90%] m-auto'>
        <div className='w-[50%] flex items-center justify-center bg-[#dedede] p-[20px] mr-[30px]'>
          <img src={images} alt="" />
        </div>
        <div className=''>
          <h1 className='text-[25px] mb-[20px] font-[600] mt-[10px]'>{t('main.optovic.fast_ogruz')}</h1>
          <p className='text-[18px]'>{t('main.optovic.text_fast_ogruz')}</p>
        </div>
        </div>
      </div>
      <div className='bg-[white]  dark:bg-[#333] dark:text-[#eeeeee] py-[50px] text-center'>
        <div>
        <h1 className='text-[25px] font-[600] text-center py-[30px]'>{t("main.optovic.title_3")}</h1>
        <p className='text-[19px] font-[400] text-center pb-[7px]'>{t("main.optovic.text_5")}</p>
        <p className='text-[19px] font-[400] text-center pb-[30px]'>{t("main.optovic.text_6")}</p>
        <div className='flex w-[90%] m-auto justify-center gap-10 2xl:flex-wrap xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap my-[40px]'>
          <Card_5 name={t('main.optovic.opt_name_1')} price={t('main.optovic.opt_price_1')} />
          <Card_5 name={t('main.optovic.opt_name_2')} price={t('main.optovic.opt_price_2')} />
          <Card_5 name={t('main.optovic.opt_name_3')} price={t('main.optovic.opt_price_3')} />
        </div>
        <Button size="large" className="button_1" style={{width: "300px", height: 55, backgroundColor: "#111", color: "white", borderRadius: 0, marginTop: 40}}>{t('main.optovic.button_1')}</Button>
        </div>
      </div>
      <div className='bg-[white] dark:bg-[#333] dark:text-[#eeeeee]'>
        <div >
          <h1 className='text-center text-[28px] font-[600] py-[50px]'>{t('main.optovic.title_4')}</h1>
          <div className='w-[90%] m-auto flex justify-between items-center flex-wrap 2xl:flex-wrap xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap'>
            <div className='flex flex-wrap w-[900px] gap-10 justify-center text-center lg:w-[100%]  md:w-[100%] sm:w-[100%] st:w-[100%] mb-[20px]'>
              <form action="">
                <TextField id="outlined-basic" label={t('main.optovic.inp_1')} variant="outlined" size='medium' style={{width: 400, margin: 10, backgroundColor: "white"}} />
                <TextField id="outlined-basic" label={t('main.optovic.inp_2')} variant="outlined" size='medium' style={{width: 400, margin: 10, backgroundColor: "white"}} />
                <TextField id="outlined-basic" label={t('main.optovic.inp_3')} variant="outlined" size='medium' style={{width: 400, margin: 10, backgroundColor: "white"}} />
                <TextField id="outlined-basic" label={t('main.optovic.inp_4')} variant="outlined" size='medium' style={{width: 400, margin: 10, backgroundColor: "white"}} />
                <Button size="large" className="button_1" style={{width: "95%", height: 55, backgroundColor: "#111", color: "white", borderRadius: 0, marginTop: 30}}>{t('main.optovic.button_2')}</Button>
              </form>
            </div>
            <div className='text-center w-[400px] bg-[#eeeeee] dark:bg-[#222] p-[13px] m-auto'>
              <h1 className='text-[25px] font-[600]'>{t("main.optovic.contact_us")}</h1>
              <div className='flex gap-10 justify-center py-[30px] text-[17px]'>
                <div>
                  <h1>+7 (499) 189-34-94</h1>
                  <h1>+7 (499) 189-40-58</h1>
                </div>
                <div>
                  <h1>+7 (495) 656-65-49</h1>
                  <h1>+7 (495) 656-65-99</h1>
                </div>
              </div>
              <h1 className='pt-[3px]'>e-mail: zakup@doctor-tm.ru</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[white] dark:bg-[#333] dark:text-[#eeeeee] py-[100px]">
        <h1 className='text-[28px] text-center font-[600]'>{t("main.optovic.title_5")}</h1>
        <div className='w-[90%] m-auto flex justify-between pt-[50px] 2xl:flex-wrap xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap'>
          <Card_6 img={quotes} text={t('main.optovic.text_7')} />
          <Card_6 img={quotes} text={t('main.optovic.text_8')} />
          <Card_6 img={quotes} text={t('main.optovic.text_9')} />
          <Card_6 img={quotes} text={t('main.optovic.text_10')} />
        </div>
      </div>
    </section>
  )
}

export default optovic