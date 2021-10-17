import React from "react";
import { TextField, Container,Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
const useStyle = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const TextFields = () => {
  const classes = useStyle();

  const [title, setTitle] = useState(``);
  const [details, setDetails] = useState(``);

  

  const handleSubmit = e => {
      e.preventDefault()
      if(title && details){
          console.log("title: " + title +" "+"details: " + details )
      }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title" // Just like Placeholder
          variant="outlined" // without color when click textfield, borders gonna disappear
          color="secondary" // if we give color then borders gonna seem with that color
          fullWidth // makes it full width
          required // it cant be empty
          error={title === ""} // if text is empty then it gives an red error
          defaultValue="text"  // it seems when page is open you can change it
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline // provide that textfields can be multiline
          rows={4} // designate row number
          fullWidth
          required
          error={details === ""}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline // provide that textfields can be multiline
          rows={4} // designate row number
          fullWidth
          required
          helperText="Please enter details here" // it seems under text fields with small font size
          error={details === ""}
        />
        <Button
        variant="contained"
        type="submit"
      >
        submit
      </Button>
      </form>
    </Container>
  );
};

export default TextFields;
