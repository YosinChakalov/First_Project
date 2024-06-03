import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useGetBlogsQuery } from '../../api/todoApi/todoApi';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const blog = () => {

  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  const {data, error, isLoading} = useGetBlogsQuery()

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='bg-white dark:bg-[#333] dark:text-[#eeeeee]'>
      <div className='flex gap-3 font-[400] text-[18px] text-[#808080] w-[90%] m-auto'>
        <Link to={'/'}>
        <h1>{t('main.blog.path_1')}</h1>
        </Link>
        <h1>/</h1>
        <h1>{t('main.blog.path_2')}</h1>
      </div>
        <h1 className='text-[30px] font-[600] text-center h-[150px] flex items-center justify-center' data-aos='fade-down-up'>{t('main.blog.title')}</h1>
        <div className='w-[90%] m-auto flex flex-wrap justify-center gap-20 pb-[100px] xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap' data-aos='fade-right'>
          {data?.map((el)=> {
            return (
              <div key={el.id}>
                <img src={el.img} alt="" className='w-[400px]' />
                <h1 className='text-[22px] font-[600] hover:text-[grey] transition-all cursor-pointer'>{el.name}</h1>
              </div>
            )
          })}
        </div>
    </section>
  )
}

export default blog