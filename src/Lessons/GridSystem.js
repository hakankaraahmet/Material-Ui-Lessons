import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Paper } from "@mui/material";


const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "red",
    textAlign:"center",
  },
}));
const GridSystem = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        rowSpacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        columnSpacing={{ xs: 1, sm: 2, md: 5 }}
        className={classes.grid}
      >
        <Grid item xs={12} md={6} lg={4}>
          <Paper className={classes.paper}>1</Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper className={classes.paper}>2</Paper>
        </Grid>
        <Grid item xs={3} md={6} lg={4}>
          <Paper className={classes.paper}>3</Paper>
        </Grid>
        <Grid item xs={3} md={6} lg={4}>
          <Paper className={classes.paper}>4</Paper>
        </Grid>
        <Grid item xs={6} md={6} lg={4}>
          <Paper className={classes.paper}>5</Paper>
        </Grid>
      </Grid>
      <br/>
      <br/>
      --------------------------------------AUTO LAYOUT-------------------------------------
      <br/>
      <br/>
      
      <Grid container spacing={3} >
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={6}>  {/* we only give value to one item but others share equal space */}
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default GridSystem;
