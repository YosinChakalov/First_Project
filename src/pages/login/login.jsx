import React from 'react'
import { axiosRequest } from '../../utils/axiosRequest'
import { Link, useNavigate } from 'react-router-dom'
import { saveToken } from '../../utils/token'
import { Button, TextField } from '@mui/material'
import { useGetUsersQuery } from '../../api/todoApi/todoApi'
import { useTranslation } from 'react-i18next'

const login = () => {

  const navigate = useNavigate()

  const {data, error, isLoading} = useGetUsersQuery()

  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  

  return (
    <div className='bg-white h-[725px] w-[100%] m-auto dark:bg-[#333] dark:text-[#eeeeee]'>
      <div>
      <div className='flex gap-3 font-[400] text-[18px] text-[#808080] w-[90%] m-auto'>
        <Link to={'/'}>
        <h1>{t('main.login.path_1')}</h1>
        </Link>
        <h1>/</h1>
        <h1>{t('main.login.path_2')}</h1>
      </div>
        <h1 className='text-[30px] font-[600] text-center h-[150px] flex items-center justify-center'>{t('main.login.title')}</h1>
        <h1 className='text-[gray] w-[90%] m-auto my-[20px]'>{t('main.login.text')}</h1>
      </div>
      <div className='flex items-center h-[40%]'>
      <form action="" className='w-[90%] m-auto' onSubmit={(e)=> {
        e.preventDefault()
        if (data.find((el) => el.email == e.target["email"].value)) {
          let filter = data.filter(
            (el) => el.email == e.target["email"].value
          );
          if (
            filter.find((el) => el.password == e.target["password"].value)
          ) {
            localStorage.setItem(
              "user",
              JSON.stringify(
                filter.find((el) => {
                  return el.password == e.target["password"].value;
                })
              )
            );
            navigate("/");
          } else {
            alert("Неверный пароль!!!");
          }
        } else {
          alert("Такой электронной почты не существует!!!");
        }
      }}>
        <label htmlFor="" className='text-[18px] font-[300]'>{t('main.login.login')}</label>
        <input name='email' className='border-2 border-[gray] pl-[10px] block mb-[20px] w-[45%] h-[50px] xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[90%] st:w-[90%]' />
        <label htmlFor="" className='text-[18px] font-[300]'>{t('main.login.password')}</label>
        <input name='password' className='border-2 border-[gray] pl-[10px] w-[45%] h-[50px] block mb-[10px] xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[90%] st:w-[90%]'/>
        <div className='mb-[20px]'>
        <Link to={"/register"}>
          <h1 className='text-[18px] inline border-b-2 border-black font-[400] hover:border-white transition-all'>{t('main.login.register')}</h1>
        </Link>
        </div>
        <Button type='submit' size="large" className="button_1" style={{width: "20%", height: 55, backgroundColor: "#111", color: "white", borderRadius: 0}}>{t('main.login.button')}</Button>
      </form>
      </div>
      </div>
  )
}

export default login