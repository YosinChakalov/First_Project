import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const register = () => {

    const { t, i18n } = useTranslation();
    function TranslateClick(lang) {
      i18n.changeLanguage(lang);
    }

  return (
    <div>
           
    </div>
  );
};

export default register;
