import {
  IconButton,
  TextField,
  ThemeProvider,
  createTheme,
  outlinedInputClasses,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu, ShoppingBagOutlined, StarOutline } from "@mui/icons-material";
import logo from "../assets/images/logo.png";
import Switcher from "../components/switcher/switcher";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRightFromBracket,
  faCircleUser,
  faPhone,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import rusIcon from "../assets/icons/flag.png";
import USAIcon from "../assets/icons/flag_2.png";
import TajIcon from "../assets/icons/flag_3.png";

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

const layout = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }

  const outerTheme = useTheme();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        padding: 1,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to={"/about"} style={{ display: "block", paddingBottom: 5 }}>
          <li className="hover:text-[gray] transition-colors cursor-pointer">
            {t("header.nav.top.navigations.about_us")}
          </li>
        </Link>
        <Link to={"/delivery"} style={{ display: "block", paddingBottom: 5 }}>
          {t("header.nav.top.navigations.delivery_and_payment")}
        </Link>
        <Link to={"/blog"} style={{ display: "block", paddingBottom: 5 }}>
          {t("header.nav.top.navigations.blog")}
        </Link>
        <Link to={"/optovic"} style={{ display: "block", paddingBottom: 5 }}>
          {t("header.nav.top.navigations.optovicam")}
        </Link>
      </List>
      <Divider />
      <List>
        <Link
          style={{ display: "block", paddingBottom: 5 }}
          to={"/catalog/man"}
        >
          {t("header.nav.categories.man")}
        </Link>

        <Link
          style={{ display: "block", paddingBottom: 5 }}
          to={"/catalog/childs"}
        >
          {t("header.nav.categories.childs")}
        </Link>

        <Link
          style={{ display: "block", paddingBottom: 5 }}
          to={"/catalog/for_home"}
        >
          {t("header.nav.categories.for_home")}
        </Link>

        <Link
          style={{ display: "block", paddingBottom: 5 }}
          to={"/catalog/for_beauty_and_health"}
        >
          {t("header.nav.categories.for_beauty")}
        </Link>

        <Link
          style={{ display: "block", paddingBottom: 5 }}
          to={"/catalog/discounts"}
        >
          {t("header.nav.categories.discounts")}
        </Link>

        <Link
          style={{ display: "block", paddingBottom: 5 }}
          to={"/catalog/likvidation"}
        >
          {t("header.nav.categories.likvidation")}
        </Link>
        <div className="flex justify-center gap-10 items-center mt-[10px]">
          <Switcher />
          <Box sx={{ width: 80 }}>
            <FormControl fullWidth className="select" size="small">
              <InputLabel id="demo-simple-select-label">
                {t("main.language")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Language"
                onChange={handleChange}
              >
                <MenuItem value={"ru"}>Русский</MenuItem>
                <MenuItem value={"en"}>English</MenuItem>
                <MenuItem value={"tj"}>Таджикский</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <IconButton aria-label="">
            <Link to={"/cart"}>
              <ShoppingBagOutlined style={{ color: "black" }} />
            </Link>
          </IconButton>
        </div>
      </List>
    </Box>
  );

  let user = JSON.parse(localStorage.getItem("user")) || [];

  const [age, setAge] = useState("");

  const handleChange = (e) => {
    TranslateClick(e.target.value), setAge(e.target.value);
  };

  return (
    <>
      <header className="w-[1519px] m-auto dark:text-[#eeeeee] 2xl:w-[100%] xl:w-[100%] lg:hidden md:hidden sm:hidden st:hidden">
        <nav>
          <div className="bg-[#222] w-[100%] h-[40px] m-auto flex items-center justify-center">
            <h6 className="text-[white] text-[14px] ">
              {t("header.nav.top.top_text")}
            </h6>
          </div>
          <div className="w-[100%] bg-[#f5f5f5] dark:bg-[#222] h-[60px] flex items-center justify-between font-sans hover:bg-red">
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
                    <FontAwesomeIcon
                      className="text-[20px] text-black dark:text-white "
                      icon={faTelegram}
                    />
                  </IconButton>
                  <IconButton aria-label="">
                    <FontAwesomeIcon
                      className="text-[20px] text-black dark:text-white "
                      icon={faWhatsapp}
                    />
                  </IconButton>
                </div>
                <div className="w-[250px]">
                  <FontAwesomeIcon
                    className="text-[20px] text-black dark:text-white w-[18px]"
                    icon={faPhone}
                  />
                  <span className="hover:text-[gray] transition-colors cursor-pointer">
                    +7 (916) 800-13-16
                  </span>
                </div>
                {localStorage.getItem("user") ? (
                  <div className="flex items-center mr-[30px]">
                    <FontAwesomeIcon
                      className="text-[25px] dark:text-[white] mr-[10px] text-[#192734]"
                      icon={faCircleUser}
                    />
                    <h1 className="dark:text-[white] text-[14px] tracking-[0.46px] font-[Montserrat-medium] text-[#192734] mr-[40px] cursor-pointer">
                      {user.name}
                    </h1>
                    <FontAwesomeIcon
                      className="text-[20px] dark:text-[white] text-[#192734] cursor-pointer"
                      onClick={() => {
                        localStorage.removeItem("user"), setUpdate();
                      }}
                      icon={faArrowRightFromBracket}
                    />
                  </div>
                ) : (
                  <div>
                    <div className="flex gap-3 ">
                      <h1 className="hover:text-[gray] transition-colors cursor-pointer text-wrap ">
                        <Link to={"/login"}>
                          {t("header.nav.top.navigations.login")}
                        </Link>
                      </h1>
                      <div className="border border-[#999] mx-[10px]"></div>
                      <h1 className="hover:text-[gray] transition-colors cursor-pointer">
                        <Link to={"/register"}>
                          {t("header.nav.top.navigations.register")}
                        </Link>
                      </h1>
                    </div>
                  </div>
                )}
                <div className="w-[30%] flex justify-center gap-5">
                  <Box sx={{ width: 170 }}>
                    <FormControl fullWidth className="select" size="small">
                      <InputLabel id="demo-simple-select-label">
                        {t("main.language")}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Language"
                        onChange={handleChange}
                      >
                        <MenuItem value={"ru"}>
                          <div className="flex gap-[45px] items-center">
                            Русский
                            <img src={rusIcon} alt="" />
                          </div>
                        </MenuItem>
                        <MenuItem value={"en"}>
                          <div className="flex gap-[52px] items-center">
                            English
                            <img src={USAIcon} alt="" />
                          </div>
                        </MenuItem>
                        <MenuItem value={"tj"}>
                          <div className="flex gap-[18px] items-center">
                            Таджикский
                            <img src={TajIcon} alt="" />
                          </div>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
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
                <IconButton aria-label="" style={{ marginRight: 35, width: 50 }}>
                  <Link to={"/cart"}>
                    <FontAwesomeIcon
                      className="text-[20px] text-black dark:text-white "
                      icon={faShoppingBag}
                    />
                  </Link>
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
        <div className="relative mb-[48px]">
          <div className="w-[100%] m-auto flex justify-between items-center dark:bg-[#333] fixed top-0 z-10 bg-[#eeeeee]">
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                  aria-label=""
                  style={{ marginRight: 35 }}
                  onClick={toggleDrawer(anchor, true)}
                >
                  <Menu style={{ color: "black" }} />
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}

            <Link to={"/"}>
              <img src={logo} alt="" className="w-[150px]" />
            </Link>
            {localStorage.getItem("user") ? (
              <div className="flex items-center mr-[20px]">
                <FontAwesomeIcon
                  className="text-[25px] dark:text-[white] mr-[10px] text-[#192734]"
                  icon={faCircleUser}
                />
                <h1 className="dark:text-[white] text-[14px] tracking-[0.46px] font-[Montserrat-medium] text-[#192734] mr-[40px] cursor-pointer">
                  {user.name}
                </h1>
                <FontAwesomeIcon
                  className="text-[20px] dark:text-[white] text-[#192734] cursor-pointer"
                  onClick={() => {
                    localStorage.removeItem("user"), setUpdate();
                  }}
                  icon={faArrowRightFromBracket}
                />
              </div>
            ) : (
              <div>
                <div className="flex gap-3 mr-[30px]">
                  <h1 className="hover:text-[gray] transition-colors cursor-pointer text-wrap ">
                    <Link to={"/login"}>
                      {t("header.nav.top.navigations.login")}
                    </Link>
                  </h1>
                  <div className="border border-[#999] mx-[10px]"></div>
                  <h1 className="hover:text-[gray] transition-colors cursor-pointer">
                    <Link to={"/register"}>
                      {t("header.nav.top.navigations.register")}
                    </Link>
                  </h1>
                </div>
              </div>
            )}
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
          <div className="mb-10">
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
