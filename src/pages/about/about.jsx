import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Card_2 from "../../components/card_2/card_2";
import { YMaps, Map, Placemark, ZoomControl, SearchControl, Clusterer } from "@pbe/react-yandex-maps";
import locate from "../../assets/images/locate.png";

const about = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  const defaultState = {
    center: [38.563912208694454, 68.75884494253803 ],
    zoom: 5,
  };

  const markerStyle = {
    iconColor: '#ff0000',
    iconLayout: 'default#image',
    iconImageHref: locate, 
    iconImageSize: [32, 32],
    iconImageOffset: [-16, -32]
};

const placemarks = [
    {
        geometry: [38.563838, 68.757106],
        properties: {
            balloonContentHeader: "ГОРЗДРАВ Аптека №1863",
            balloonContentBody: "г. Руза, ул. Солнцева, д. 8",
            balloonContentFooter: "Открыто до 21:00<br>+7(499)653-62-77"
        }
    },
    {
        geometry: [38.438679, 68.771488],
        properties: {
            balloonContentHeader: "Рузмед",
            balloonContentBody: "Дополнительная информация о Рузмед"
        }
    }
];

  return (
    <section className="bg-[white] pt-[10px] pb-[70px] dark:bg-[#333] dark:text-[#eeeeee]">
      <div className="flex gap-3 font-[400] text-[18px] text-[#808080] w-[90%] m-auto">
        <h1>{t("main.about_us.path_1")}</h1>
        <h1>/</h1>
        <h1>{t("main.about_us.path_2")}</h1>
      </div>
      <h1 className="text-center text-[28px] font-[700]">
        {t("main.about_us.title")}
      </h1>
      <div className="w-[90%] m-auto text-[16px] 2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[90%] st:w-[90%]">
        <h1 className="my-[30px] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] st:w-[100%] 2xl:text-wrap xl:text-wrap lg:text-wrap md:text-wrap sm:text-wrap st:text-wrap">
          {t("main.about_us.text_1")}
        </h1>
        <h1 className="mb-[30px] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] st:w-[100%] 2xl:text-wrap xl:text-wrap lg:text-wrap md:text-wrap sm:text-wrap st:text-wrap">
          {t("main.about_us.text_2")}
        </h1>
        <h1 className="mb-[30px] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] st:w-[100%] 2xl:text-wrap xl:text-wrap lg:text-wrap md:text-wrap sm:text-wrap st:text-wrap">
          {t("main.about_us.text_3")}
        </h1>
        <h1 className="mb-[30px] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] st:w-[100%] 2xl:text-wrap xl:text-wrap lg:text-wrap md:text-wrap sm:text-wrap st:text-wrap">
          {t("main.about_us.text_4")}
        </h1>
        <h1 className="mb-[30px] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] st:w-[100%] 2xl:text-wrap xl:text-wrap lg:text-wrap md:text-wrap sm:text-wrap st:text-wrap">
          {t("main.about_us.text_5")}
        </h1>
        <h1 className="pb-[30px] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] st:w-[100%] 2xl:text-wrap xl:text-wrap lg:text-wrap md:text-wrap sm:text-wrap st:text-wrap">
          {t("main.about_us.text_6")}
        </h1>
      </div>
      <div className="grid grid-cols-[repeat(4,142px)] gap-[20px] bg-[#ededed] backdrop-blur-sm dark:bg-[#222] dark:bg-opacity-50 p-[40px_88px] rounded-[16px] bg-opacity-90 justify-between w-[90%] m-auto">
        <Card_2
          title={t("main.home.card_4.title_1")}
          text={t("main.home.card_4.text_1")}
        />
        <Card_2
          title={t("main.home.card_4.title_2")}
          text={t("main.home.card_4.text_2")}
        />
        <Card_2
          title={t("main.home.card_4.title_3")}
          text={t("main.home.card_4.text_3")}
        />
        <Card_2
          title={t("main.home.card_4.title_4")}
          text={t("main.home.card_4.text_4")}
        />
      </div>
      <YMaps>
                <Map className='w-[725px] h-[400px]' defaultState={{ center: [38.563838, 68.757106], zoom: 9 }} >
                    <ZoomControl options={{ float: 'right' }} />
                    <SearchControl
                        options={{
                            float: 'right',
                            provider: 'yandex#search'
                        }}
                    />
                    <Clusterer>
                        {placemarks.map((placemark, index) => (
                            <Placemark
                                key={index}
                                geometry={placemark.geometry}
                                properties={placemark.properties}
                                options={markerStyle}
                            />
                        ))}
                    </Clusterer>
                </Map>
            </YMaps>
    </section>
  );
};

export default about;
