import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  heading: {
    "& h2": {
      "@media(max-width:599px)": {
        fontSize: "20px",
      },
    },
  },
}));

export default function Heading({ heading }) {
  const classes = useStyles();
  return (
    <div className={classes.heading}>
      <Typography variant="h2" style={{ color: "#fff" }}>
        {heading}
      </Typography>
    </div>
  );
}
