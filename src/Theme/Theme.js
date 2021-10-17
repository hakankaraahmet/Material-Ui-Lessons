import {createTheme} from "@mui/material"

export const theme = createTheme({
    palette:{
      primary:{
        main:"#6c6c6c" // we changed primary color from default values
      },
      secondary : {
        main : "#fff"
      },
      success:{
        main:"#fff"
      }
    },
    typography:{
      fontFamily : "Quicksand, sans-serif",
      fontWeightLight : 400,
      fontWeightRegular : 500,
      fontWeightMedium : 600,
      fontWeightBold : 700
    }
})