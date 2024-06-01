import React from 'react'
import Card_3 from '../../components/card_3/card_3';
import discountImg from "../../assets/images/discount.png"
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const discount = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <section className='bg-[white] pt-[10px] pb-[70px] dark:bg-[#333] dark:text-[#eeeeee]'>
     <div className='flex gap-3 font-[400] text-[18px] text-[#808080] w-[90%] m-auto'>
        <Link to={'/'}>
        <h1>{t('main.discount.path_1')}</h1>
        </Link>
        <h1>/</h1>
        <h1>{t('main.discount.path_2')}</h1>
      </div>
      <h1 className='text-center text-[28px] font-[700]'>{t('main.discount.title')}</h1>
      <div className='flex w-[90%] m-auto justify-between flex-wrap xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[90%] st:w-[90%] 2xl:flex-wrap xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap'>
        <Card_3 text={t('main.discount.text_1')} img={discountImg} duration={t('main.discount.button')} data={t('main.discount.duration')} />
        <Card_3 text={t('main.discount.text_2')} img={discountImg} duration={t('main.discount.button')} data={t('main.discount.duration')} />
        <Card_3 text={t('main.discount.text_3')} img={discountImg} duration={t('main.discount.button')} data={t('main.discount.duration')} />
        <Card_3 text={t('main.discount.text_4')} img={discountImg} duration={t('main.discount.button')} data={t('main.discount.duration')} />
      </div>
    </section>
  )
}

export default discount