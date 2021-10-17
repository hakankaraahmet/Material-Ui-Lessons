import React from "react";
import TypographyLesson from "./Lessons/TypographyLesson"
import ButtonLesson from "./Lessons/ButtonLesson";
import IconLesson from "./Lessons/IconLesson";
import MakeStyleHook from "./Lessons/MakeStyleHook";
import CustomThemes from "./Lessons/CustomThemes";
import {ThemeProvider} from "@mui/material"
import {theme} from "./Theme/Theme"

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <TypographyLesson/> 
      <ButtonLesson/>
      <IconLesson/>
      <MakeStyleHook/>
      <CustomThemes/>
      </ThemeProvider>
    </div>
  );
};

export default App;
