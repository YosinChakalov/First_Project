import {
  Button,
  IconButton,
  Input,
  TextField,
  ThemeProvider,
  createTheme,
  outlinedInputClasses,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import TelegramIcon from "@mui/icons-material/Telegram";
import {
  ArrowForward,
  Menu,
  Phone,
  Search,
  Shop,
  ShoppingBagOutlined,
  StarOutline,
  WhatsApp,
} from "@mui/icons-material";
import logo from "../assets/images/logo.png";
import Switcher from "../components/switcher/switcher";
import { useTranslation } from "react-i18next";
import { Dropdown, Space } from "antd";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

const layout = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  const outerTheme = useTheme();

  return (
    <>
      <header className="w-[1519px] m-auto dark:text-[#eeeeee] 2xl:w-[100%] xl:w-[100%] lg:hidden md:hidden sm:hidden st:hidden">
        <nav>
          <div className="bg-[#222] w-[100%] h-[40px] m-auto flex items-center justify-center">
            <h6 className="text-[white] text-[14px] ">
              {t("header.nav.top.top_text")}
            </h6>
          </div>
          <div className="w-[100%] bg-[#f5f5f5] dark:bg-[#222] h-[40px] flex items-center justify-between font-sans hover:bg-red">
            <div className="w-[85%] flex items-center justify-between m-auto ">
              <div>
                <ul className="flex gap-10 text-[#222] dark:text-[#eeeeee] items-center">
                  <Link to={"/about"}>
                    <li className="hover:text-[gray] transition-colors cursor-pointer">
                      {t("header.nav.top.navigations.about_us")}
                    </li>
                  </Link>
                  <li className="hover:text-[gray] transition-colors cursor-pointer">
                    <Link to={"/delivery"}>
                      {t("header.nav.top.navigations.delivery_and_payment")}
                    </Link>
                  </li>
                  <li className="hover:text-[gray] transition-colors cursor-pointer">
                    <Link to={"/blog"}>
                      {t("header.nav.top.navigations.blog")}
                    </Link>
                  </li>
                  <li className="hover:text-[gray] transition-colors cursor-pointer">
                    <Link to={"/optovic"}>
                      {t("header.nav.top.navigations.optovicam")}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-7 ">
                <div className="flex gap-3">
                  <IconButton aria-label="">
                    <TelegramIcon style={{ color: "black" }} />
                  </IconButton>
                  <IconButton aria-label="">
                    <WhatsApp style={{ color: "black" }} />
                  </IconButton>
                </div>
                <div className="w-[250px]">
                  <Phone style={{ color: "black" }} />
                  <span className="hover:text-[gray] transition-colors cursor-pointer">
                    +7 (916) 800-13-16
                  </span>
                </div>
                <div className="flex gap-3 ">
                  <h1 className="hover:text-[gray] transition-colors cursor-pointer text-wrap ">
                    {t("header.nav.top.navigations.login")}
                  </h1>
                  <div className="border border-[#999] mx-[10px]"></div>
                  <h1 className="hover:text-[gray] transition-colors cursor-pointer">
                    {t("header.nav.top.navigations.register")}
                  </h1>
                </div>
                <div className="w-[30%] flex justify-center gap-5">
                  <select
                    name=""
                    id=""
                    onChange={(e) => TranslateClick(e.target.value)}
                    className="bg-transparent"
                  >
                    <option value="ru" className="dark:bg-[#222]">
                      RU
                    </option>
                    <option value="en" className="dark:bg-[#222]">
                      EN
                    </option>
                    <option value="tj" className="dark:bg-[#222]">
                      TJ
                    </option>
                  </select>
                  <Switcher />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section className="bg-[white] dark:bg-[#333]">
          <div className="w-[90%] m-auto">
            <div className="h-[150px] flex items-center justify-end">
              <Link to={"/"}>
                <img src={logo} alt="" className="w-[400px]" />
              </Link>
              <div className="w-[35%] flex justify-end gap-5">
                <IconButton aria-label="">
                  <StarOutline style={{ color: "black" }} />
                </IconButton>
                <IconButton aria-label="" style={{ marginRight: 35 }}>
                  <ShoppingBagOutlined style={{ color: "black" }} />
                </IconButton>
              </div>
            </div>
            <div className="flex justify-between items-center border-b-[1px]">
              <div className="flex gap-10">
                <h1 className="transition cursor-pointer text-[14px] font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] hover:border-b-2 ">
                  <Link to={"/catalog/man"}>
                       {t("header.nav.categories.man")}
                  </Link>
                </h1>
                <h1 className="transition cursor-pointer text-[14px] font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] border-b-2 pb-[19px]">
                  <Link to={"/catalog/childs"}>
                    {t("header.nav.categories.childs")}
                  </Link>
                </h1>
                <h1 className="transition cursor-pointer text-[14px] font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] border-b-2 pb-[19px]">
                  <Link to={"/catalog/for_home"}>
                    {t("header.nav.categories.for_home")}
                  </Link>
                </h1>
                <h1 className="transition cursor-pointer text-[14px] font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] border-b-2 pb-[19px]">
                  <Link to={"/catalog/for_beauty_and_health"}>
                    {t("header.nav.categories.for_beauty")}
                  </Link>
                </h1>
                <h1 className="transition cursor-pointer text-[14px] font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] border-b-2 pb-[19px]">
                  <Link to={"/catalog/discounts"}>
                    {t("header.nav.categories.discounts")}
                  </Link>
                </h1>
                <h1 className="transition cursor-pointer text-[14px] font-[500] hover:border-black dark:hover:border-white border-[white] dark:border-[#333] border-b-2 pb-[19px]">
                  <Link to={"/catalog/likvidation"}>
                    {t("header.nav.categories.likvidation")}
                  </Link>
                </h1>
              </div>
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField
                  label={t("header.nav.categories.search")}
                  style={{
                    position: "relative",
                    bottom: 11,
                    width: 300,
                    backgroundColor: "white",
                  }}
                  type="search"
                  size="small"
                />
              </ThemeProvider>
            </div>
          </div>
        </section>
      </header>
      <header className="w-[1519px] m-auto dark:text-[#eeeeee] hidden lg:block md:block sm:block st:block lg:w-[100%] md:w-[100%] sm:w-[100%] st:w-[100%]">
        <div className="w-[90%] m-auto flex justify-between items-center">
          <IconButton aria-label="" style={{ marginRight: 35 }}>
            <Menu style={{ color: "black" }} />
          </IconButton>
          <Link to={'/'}>
          <img src={logo} alt="" className="w-[150px]" />
          </Link>
          <div className="flex justify-end gap-1">
          <IconButton aria-label="">
                  <StarOutline style={{ color: "black", width: 20 }} />
                </IconButton>
                <IconButton aria-label="">
                  <ShoppingBagOutlined style={{ color: "black", width: 20 }} />
                </IconButton>
                <IconButton aria-label="">
                  <Search style={{ color: "black", width: 20 }} />
                </IconButton>
          </div>
        </div>
      </header>
      <main className="w-[1519px] m-auto 2xl:w-[1519px] xl:w-[100%] lg:w-[100%]  md:w-[100%] sm:w-[100%] st:w-[100%]">
        <Outlet />
      </main>
      <footer className="w-[1519px] m-auto bg-[#222] pt-[140px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%]  md:w-[100%] sm:w-[100%] st:w-[100%]">
        <div className="w-[90%] m-auto flex justify-between 2xl:w-[90%] xl:w-[90%] lg:w-[90%]  md:w-[90%] sm:w-[90%] st:w-[90%] 2xl:flex-wrap xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap">
          <div className="">
            <ul className="flex flex-col justify-center gap-2">
              <li className="text-white font-[600] mb-[10px] ">
                {t("footer.first_colm.title")}
              </li>
              <li className="text-[white] font-[400] ">
                {t("footer.first_colm.location")}
              </li>
              <li className="text-[white] font-[400] hover:text-[grey] transition-[1s] cursor-pointer">
                +7 (916) 800-13-16
              </li>
              <li className="text-[white] font-[400] hover:text-[grey] transition-[1s] cursor-pointer">
                info@doctor-tm.ru
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col justify-center gap-2">
              <li className="text-white font-[600] mb-[10px]">
                {t("footer.second_colm.title")}
              </li>
              <Link to={"/catalog/man"}>
                <li className="text-[#fff] hover:opacity-[1] transition-[1s] cursor-pointer opacity-[0.6] font-[400]">
                  {t("footer.second_colm.man")}
                </li>
              </Link>
              <Link to={"/catalog/childs"}>
                <li className="text-[#fff] hover:opacity-[1] transition-[1s] cursor-pointer opacity-[0.6] font-[400]">
                  {t("footer.second_colm.childrens")}
                </li>
              </Link>
              <Link to={"/catalog/for_home"}>
                <li className="text-[#fff] hover:opacity-[1] transition-[1s] cursor-pointer opacity-[0.6] font-[400]">
                  {t("footer.second_colm.forHome")}
                </li>
              </Link>
              <Link to={"/catalog/for_beauty_and_health"}>
                <li className="text-[#fff] hover:opacity-[1] transition-[1s] cursor-pointer opacity-[0.6] font-[400]">
                  {t("footer.second_colm.fotBeauty")}
                </li>
              </Link>
              <Link to={"/catalog/discounts"}>
                <li className="text-[#fff] hover:opacity-[1] transition-[1s] cursor-pointer opacity-[0.6] font-[400]">
                  {t("footer.second_colm.discounts")}
                </li>
              </Link>
              <Link to={"/catalog/likvidation"}>
                <li className="text-[#fff] hover:opacity-[1] transition-[1s] cursor-pointer opacity-[0.6] font-[400]">
                  {t("footer.second_colm.likvidation")}
                </li>
              </Link>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col justify-center gap-2">
              <li className="text-white font-[600] mb-[10px]">
                {t("footer.third_colm.title")}
              </li>
              <Link to={"/about"}>
                <li className="text-[#fff] hover:opacity-[1] transition-[1s] cursor-pointer opacity-[0.6] font-[400]">
                  {t("footer.third_colm.about")}
                </li>
              </Link>
              <Link to={"/delivery"}>
                <li className="text-[#fff] hover:opacity-[1] transition-[1s] cursor-pointer opacity-[0.6] font-[400]">
                  {t("footer.third_colm.delivery")}
                </li>
              </Link>
              <Link to={"/return"}>
                <li className="text-[#fff] hover:opacity-[1] transition-[1s] cursor-pointer opacity-[0.6] font-[400]">
                  {t("footer.third_colm.return")}
                </li>
              </Link>
              <Link to={"/optovic"}>
                <li className="text-[#fff] hover:opacity-[1] transition-[1s] cursor-pointer opacity-[0.6] font-[400]">
                  {t("footer.third_colm.optovic")}
                </li>
              </Link>
              <Link to={"/policity"}>
                <li className="text-[#fff] hover:opacity-[1] transition-[1s] cursor-pointer opacity-[0.6] font-[400]">
                  {t("footer.third_colm.policity")}
                </li>
              </Link>
              <Link to={"/reviews"}>
                <li className="text-[#fff] hover:opacity-[1] transition-[1s] cursor-pointer opacity-[0.6] font-[400]">
                  {t("footer.third_colm.Reviews")}
                </li>
              </Link>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col justify-center gap-2">
              <li className="text-white font-[600] mb-[10px]">
                {t("footer.fourth_colm.title")}
              </li>
              <li>
                <ThemeProvider theme={customTheme(outerTheme)}>
                  <TextField
                    label={t("header.nav.categories.search")}
                    style={{
                      marginBottom: 15,
                      width: 300,
                      backgroundColor: "white",
                    }}
                    type="search"
                    size="small"
                  />
                </ThemeProvider>
              </li>
              <li
                className="text-[#fff] hover:opacity-[1] transition-[1s] cursor-pointer opacity-[0.6] font-[400]"
                id="line"
              >
                {t("footer.fourth_colm.policity")}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-b-2 mt-[50px] border-[#484848]"></div>
        <div className="w-[90%] m-auto flex justify-between items-center text-[#fff] font-[400] h-[60px]">
          <h1 className="opacity-[0.6] hover:opacity-[1] transition-[1s] cursor-pointer">
            {t("footer.last.company")}
          </h1>
          <h1 className="opacity-[0.6] hover:opacity-[1] transition-[1s] cursor-pointer">
            2024г
          </h1>
        </div>
      </footer>
    </>
  );
};

export default layout;