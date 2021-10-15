import React from "react";
import { Button, ButtonGroup } from "@mui/material";

const ButtonLesson = () => {
  return (
    <div>
      <Button
        variant="contained"
        color="secondary" // only mui colors
        // disabled
        type="submit"
        size="small" // three types of size is avaliable. small,medium(default),large
      >
        Click
      </Button>

      {/* Link Button */}
      <Button
        variant="outlined"
        href="/" // in router dom it is usable to send us to page that we want to visit
      >
        Link to Mui
      </Button>
      <br />
      {/* Button Group  */}

      <ButtonGroup variant="outlined" color="success" size="large">
        <Button>left</Button>
        <Button>center</Button>
        <Button>right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup
        variant="outlined"
        color="success"
        size="large"
        orientation="vertical"
      >
        {/* here is a vertical button group */}
        <Button>left</Button>
        <Button>center</Button>
        <Button>right</Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonLesson;
