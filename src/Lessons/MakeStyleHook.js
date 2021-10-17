import React from "react";
import { makeStyles } from "@mui/styles";
import {Button,Typography} from "@mui/material"

const useStyle = makeStyles({
  btn: {
    fontSize: 60, // 60px
    backgroundColor: "cadetblue",
    "&:hover":{     // usage of hover
        backgroundColor:"blue"
    }
  },        // when we want to give another style, we need to use ,
  title : {
      textDecoration : "underline",
      marginBottom : 20
  }
});

const MakeStyleHook = () => {
  const classes = useStyle();  // we assign useStyle() to classes
  return (
    <div>
      <Button
        className = {classes.btn}  // then use classes like here
        variant="outlined"
        href="/" 
      >
        Link to Mui
      </Button>
      <Typography
        className={classes.title}
        variant="h6"  
        component="h1"  
        color="#9ab5c4" 
        align="center"
        gutterBottom
      >
        Hello World
      </Typography>
    </div>
  );
};

export default MakeStyleHook;
