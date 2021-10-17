import {createTheme} from "@mui/material"

export const theme = createTheme({
    palette:{
      primary:{
        main:"#fefefe" // we changed primary color from default values
      },
      secondary : {
        main : "#afafaf"
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