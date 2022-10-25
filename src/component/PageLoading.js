import React from "react";
import { makeStyles, Box, LinearProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    left: 0,
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 2000,
  },
}));

export default function PageLoading() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box textAlign="center">
        <img
          src="/images/resto/food_loader_animation.gif"
          alt="Loading Page"
          width="100%"
        />
      </Box>
    </div>
  );
}
