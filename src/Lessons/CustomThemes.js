import React from "react";
import { Button, Typography } from "@mui/material";
const CustomThemes = () => {
  return (
    <div>
      <Button variant="contained" color="primary">
        new primary
      </Button>
      <Button variant="contained" color="secondary">
        new secondary
      </Button>
      <Typography fontWeight="light">
            New Font Style with light font weight
      </Typography>
      <Typography fontWeight="regular">
            New Font Style with regular font weight
      </Typography>
      <Typography fontWeight="medium">
            New Font Style with medium font weight
      </Typography>
      <Typography fontWeight="bold">
            New Font Style with bold font weight
      </Typography>
    </div>
  );
};

export default CustomThemes;
