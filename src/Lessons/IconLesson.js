import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Icon,Button } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const IconLesson = () => {
  return (
    <div>
      {/* At first add icon packages "with yarn add @mui/icons-material" */}
      <AcUnitIcon
        color="action"
        fontSize="large" // instead of size we use fontSize
      />

        {/* using Icon  tag to implement icons */}
      <Icon>add_circle</Icon>  
      <Icon color="primary">home</Icon>

       {/* manuel painting icons */}
      <Icon sx={{ color: "red" }}>add_circle</Icon>
      <Icon fontSize="small">phone</Icon>

      {/* manuel sizing icon */}
      <Icon sx={{ fontSize: 60 }}>message</Icon> 


      {/* ICONS INSIDE BUTTON */}
        <br/>
      <Button
        variant="contained"
        color ="secondary" 
        size="large"  
        startIcon={<PhoneIcon/>}
      >
        Call
      </Button>

      <br/>

      <Button
        variant="contained"
        color ="primary" 
        endIcon={<EmailIcon/>}
      >
        Send Mail
      </Button>
    </div>
  );
};

export default IconLesson;
