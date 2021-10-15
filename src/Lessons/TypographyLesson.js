import React from 'react'
import { Typography } from "@mui/material";

const TypographyLesson = () => {
    return (
        <div>
      <Typography
        variant="h6"  // specify the seem of text
        component="h1"  // specify the exact value of text
        color="#9ab5c4" 
        align="center"
        border="1px solid red"
        gutterBottom
      >
        Hello World
      </Typography>
        </div>
    )
}

export default TypographyLesson
