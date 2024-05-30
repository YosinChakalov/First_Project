import React from 'react'
import { useTranslation } from 'react-i18next';

const returnitems = () => {
    const { t, i18n } = useTranslation();
    function TranslateClick(lang) {
      i18n.changeLanguage(lang);
    }
  
    return (
      <section className='bg-[white] pt-[10px] pb-[70px] dark:bg-[#333] dark:text-[#eeeeee]'>
        <div className='flex gap-3 font-[400] text-[18px] text-[#808080] w-[90%] m-auto'>
          <h1>{t('main.return_items.path_1')}</h1>
          <h1>/</h1>
          <h1>{t('main.return_items.path_2')}</h1>
        </div>
        <h1 className='text-center text-[28px] font-[700]'>{t('main.return_items.title')}</h1>
        <div className='w-[90%] m-auto text-[16px]'>
          <h1 className='my-[30px]'>{t('main.return_items.text_1')}</h1>
          <h1 className='mb-[30px]'>{t('main.return_items.text_2')}</h1>
          <h1 className='mb-[30px]'>{t('main.return_items.text_3')}</h1>
          <h1 className='mb-[30px]'>{t('main.return_items.text_4')}</h1>
          <h1 className='mb-[30px]'>{t('main.return_items.text_5')}</h1>
          <h1 className='pb-[30px]'>{t('main.return_items.text_6')}</h1>
          <div className='mb-[30px]'>
          <h1 className=''>{t('main.return_items.text_7')}</h1>
          <h1 className=''>{t('main.return_items.text_8')}</h1>
          <h1 className=''>{t('main.return_items.text_9')}</h1>
          </div>
          <h1 className='my-[30px]'>{t('main.return_items.text_10')}</h1>
          <h1 className='mb-[30px]'>{t('main.return_items.text_11')}</h1>
        </div>
      </section>
    )
}

export default returnitems