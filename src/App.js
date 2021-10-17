import React from "react";
import TypographyLesson from "./Lessons/TypographyLesson";
import ButtonLesson from "./Lessons/ButtonLesson";
import IconLesson from "./Lessons/IconLesson";
import MakeStyleHook from "./Lessons/MakeStyleHook";
import CustomThemes from "./Lessons/CustomThemes";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Theme/Theme";
import TextFields from "./Lessons/TextFields";
import RadioButtons from "./Lessons/RadioButtons";
import GridSystem from "./Lessons/GridSystem";
import StyledItem from "./Lessons/StyledItem"


const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <TypographyLesson />
        <ButtonLesson />
        <IconLesson />
        <MakeStyleHook />
        <CustomThemes /> 
        <TextFields/>
        <RadioButtons/> 
        <GridSystem/>
        <StyledItem/>
      </ThemeProvider>
    </div>
  );
};

export default App;
