import BlackMarketCard from "src/component/ExploreCard";
import {
  Box,
  Button,
  Container,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core";
import React, { useState } from "react";
const useStyles = makeStyles((theme) => ({
  cardsList: {
    zIndex: 0,
    width: "100%",
    "& .card": {
      width: "100%",
      height: "300px",
      borderRadius: "40px",
      boxShadow:
        "5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22)",
      cursor: "pointer",
      transition: "0.4s",
      "&:hover": {
        transform: "scale(0.9, 0.9)",
        boxShadow:
          "5px 5px 30px 15px rgba(0,0,0,0.25), \n    -5px -5px 30px 15px rgba(0,0,0,0.22)",
      },
    },
    "& .cardimage": {
      width: "inherit",
      height: "inherit",
      borderRadius: "40px",
      "& img": {
        width: "inherit",
        height: "inherit",
        borderRadius: "40px",
        objectFit: "cover",
      },
    },
    "& .cardtitle": {
      textAlign: "center",
      borderRadius: "0px 0px 40px 40px",
      fontFamily: "sans-serif",
      fontWeight: "bold",
      fontSize: "30px",
      marginTop: "-80px",
      height: "40px",
      color: "#fff",
    },
  },
}));

export default function Category({
  data,
  index,
  setDataList,
  setTabview,
  tabview,
}) {
  console.log("data----", data);
  const classes = useStyles();

  return (
    <Box
      className={classes.cardsList}
      onClick={() => {
        setTabview(index);
        setDataList(data);
      }}
    >
      <Box className="card">
        <Box className="cardimage">
          <img src={data?.image} />{" "}
        </Box>
        <div className="cardtitle title-white">
          <p> {data?.name}</p>
        </div>
      </Box>
    </Box>
  );
}
