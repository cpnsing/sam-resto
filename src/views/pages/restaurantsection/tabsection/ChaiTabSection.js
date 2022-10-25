import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import ChaiSection from "../chaisection/ChaiSection";
const chaiList = [
  {
    title: "ALL MENUS",
    color: "#dc3545",
    img: "images/resto/chai1.gif",
  },
  {
    title: "SPECIAL CHAI",
    img: "images/resto/chai1.gif",
  },
  {
    title: "TANDOORI CHAIN",
    img: "images/resto/chai2.gif",
  },
  {
    title: "BLACK TEA1",
    img: "images/resto/chai3.gif",
  },
  {
    title: "BLACK TEA2",
    img: "images/resto/chai4.gif",
  },
  {
    title: "BLACK TEA3",
    img: "images/resto/chai1.gif",
  },
];

const useStyles = makeStyles((theme) => ({
  mainSection: {
    background: "#010F1C",
    borderRadius: "10px",
    marginTop: "20px",
  },
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    cursor: "pointer",
    minHeight: "50px",
  },
  activeBox: {
    background: "#dc3545",
    padding: "30px 10px",
    width: "100%",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    flexDirection: "column",
  },
}));

export default function ChaiTabSection() {
  const classes = useStyles();
  const [value, setValue] = useState("ALL MENUS");
  console.log("value----", value);
  return (
    <Box>
      <Box className={classes.mainSection}>
        <Grid container>
          {chaiList.map((data, i) => {
            return (
              <Grid item xs={6} sm={2} md={2} lg={2}>
                <Box
                  className={classes.mainBox}
                  onClick={() => setValue(data.title)}
                >
                  <Box
                    className={value === data.title ? classes.activeBox : ""}
                  >
                    <img
                      src={data.img}
                      style={{ height: "90px", width: "90px" }}
                    />
                    <Typography>{data.title}</Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      {value && <ChaiSection />}
    </Box>
  );
}
