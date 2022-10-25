import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  mainBg: {
    minHeight: "620px",

    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    paddingBottom: "100px",
    "& img": {
      objectFit: "cover",
      width: "100%",
    },
  },
  mainContent: {
    display: "flex",
    padding: "50px",
    alignItems: "center",
    height: "450px",
    overflow: "hidden",
    width: "100%",
    "& h3": {
      color: "#fff",
      fontSize: "30px",
    },
  },
}));

export default function AdPost({ data }) {
  const classes = useStyles();
  return (
    <Box
      className={classes.mainBg}
      style={{
        background: "url(" + data.image + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: " bottom",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Box className={classes.mainContent}>
            <Box>
              <Typography variant="h3">{data.title}</Typography>
            </Box>
          </Box>
        </Grid>
        {/* <Grid item lg={6}>
          <Box className={classes.mainContent}>
            <img src="images/resto/bg2.webp" />
          </Box>
        </Grid> */}
      </Grid>
    </Box>
  );
}
