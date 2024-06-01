import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/src/App.css";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import manClothes from "/src/assets/images/manClothes.webp";
import exclusives from "/src/assets/images/exclusives.webp";
import medal from "/src/assets/images/medal.png";
import Card_1 from "../../components/card_1/card_1";
import { useTranslation } from "react-i18next";
import { useGetTodosQuery } from "../../api/todoApi/todoApi";
import { StarBorderOutlined } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import manInJimper from "../../assets/images/manInjimper.jpg"
import cat from "../../assets/images/cat.jpg"
import { useGetReviewsQuery } from "../../api/reviewsApi/reviewsApi";

const home = () => {
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

  const { data, error, isLoading } = useGetTodosQuery();
  const { data:data2, error:error2, isLoading:isLoading2 } = useGetReviewsQuery()

  return (
    <section>
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
          <img src={exclusives} className="2xl:w-[100%] xl:w-[100%] lg:w-[100%]  md:w-[100%] sm:w-[100%] st:w-[100%]" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={manClothes} className="2xl:w-[100%] xl:w-[100%] lg:w-[100%]  md:w-[100%] sm:w-[100%] st:w-[100%]" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <div className="flex justify-center gap-10 w-[90%] m-auto flex-wrap items-center 2xl:w-[90%] xl:w-[90%] lg:w-[90%]  md:w-[90%] sm:w-[90%] st:w-[90%] 2xl:flex-wrap xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap mt-[30px]">
        <Card_1 img={medal} text={t("main.home.card_1_text")} />
        <Card_1 img={medal} text={t("main.home.card_1_text")} />
        <Card_1 img={medal} text={t("main.home.card_1_text")} />
        <Card_1 img={medal} text={t("main.home.card_1_text")} />
        <Card_1 img={medal} text={t("main.home.card_1_text")} />
      </div>
      <div className="bg-[white] dark:bg-[#333] dark:text-[#eeeeee] pt-[50px]">
        <div className="flex justify-center items-center gap-5 font-[500] mb-[10px]">
        <h1 className="cursor-pointer dark:text-[#eeeeee] hover:border-b-2 hover:border-black dark:hover:border-white dark:border-[#333] border-[white] border-b-2">{t('main.home.title_1')}</h1>
        <h1 className="cursor-pointer dark:text-[#eeeeee] hover:border-b-2 hover:border-black border-[white] dark:hover:border-white dark:border-[#333] border-b-2">{t('main.home.title_2')}</h1>
        </div>
        <div className="w-[90%] m-auto pb-[50px] flex flex-wrap gap-10 items-center justify-between">
          {data?.map((el) => {
            return (
              <div key={el.id} className="relative">
                <div>
                  <img src={el.img} alt="" className="w-[310px] cursor-pointer" />
                  <div className="absolute top-[10px] left-[245px] z-[5] ">
                    <IconButton aria-label="" >
                      <StarBorderOutlined style={{color: "black"}} />
                    </IconButton>
                  </div>
                </div>
                <h1 className="hover:opacity-[0.5] cursor-pointer text-[16px] my-[10px]">
                  {el.name}
                </h1>
                <h1 className="font-[500] mb-[10px]">{el.price}</h1>
                <Button size="large" className="button_1" style={{width: "100%", height: 55, backgroundColor: "#111", color: "white", borderRadius: 0}}>{t('main.home.card_2_button')}</Button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-white dark:bg-[#333] dark:text-[#eeeeee] 2xl:w-[100%] xl:w-[100%] lg:w-[100%]  md:w-[100%] sm:w-[100%] st:w-[100%]">
        <div className="w-[90%]  flex justify-between m-auto flex-wrap 2xl:w-[90%] xl:w-[90%] lg:w-[90%]  md:w-[90%] sm:w-[90%] st:w-[90%] 2xl:flex-wrap xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap">
        <div className="pb-[30px]">
          <img src={manInJimper} alt="" className="w-[310px]" />
          <h1 className="text-[18px] font-[500] mt-[10px]">{t('main.home.card_3.name_1')}</h1>
        </div>
        <div className="pb-[30px]">
          <img src={manInJimper} alt="" className="w-[310px]" />
          <h1 className="text-[18px] font-[500] mt-[10px]">{t('main.home.card_3.name_2')}</h1>
        </div>
        <div className="pb-[30px]">
          <img src={manInJimper} alt="" className="w-[310px]" />
          <h1 className="text-[18px] font-[500] mt-[10px]">{t('main.home.card_3.name_3')}</h1>
        </div>
        <div className="pb-[30px]">
          <img src={manInJimper} alt="" className="w-[310px]" />
          <h1 className="text-[18px] font-[500] mt-[10px]">{t('main.home.card_3.name_4')}</h1>
        </div>
        </div>
      </div>
      <div className=" bg-[white] pt-[100px] dark:bg-[#333] dark:text-[#eeeeee]">
        <div className="flex justify-between w-[90%] m-auto 2xl:flex-wrap xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap mt-[30px]">
        {data2?.map((el)=> {
          return (
            <div key={el.id} className="pb-[30px]">
              <img src={el.img} alt="" className="w-[300px]" />
            </div>
          )
        })}
        </div>
      </div>
    </section>
  );
};

export default home;
