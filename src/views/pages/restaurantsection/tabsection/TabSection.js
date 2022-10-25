import {
  Box,
  Button,
  Container,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import BiryaniTabSection from "./BiryaniTabSection";
import ChaiTabSection from "./ChaiTabSection";
import TopMenuList from "./TopMenuList";

const useStyles = makeStyles((theme) => ({
  mainSection: {
    backgroundColor: "#081622",
    backgroundRepeat: "no-repeat",
    padding: "30px 0px",
    position: "relative",
    "& .animation": {
      position: "absolute",
      top: "0",
      left: "0",
      animation: "jumpReverseAni 7s linear infinite",
      WebkitAnimation: "jumpReverseAni 7s linear infinite",
      "& img": {
        maxWidth: "100%",
      },
    },
  },
  tabTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  chaibtnunactive: {
    borderBottom: "2px solid #fff",
    cursor: "pointer",
    padding: "0px 10px",

    "& h3": {
      fontSize: "30px",
      color: "#fff",
    },
  },
  chaiBtn: {
    borderBottom: "2px solid #f47153",
    cursor: "pointer",
    padding: "0px 10px",
    "& h3": {
      fontSize: "30px",
      color: "#f47153",
    },
  },
}));

export default function TabSection() {
  const classes = useStyles();
  const [tabview, setTabView] = useState("chai");
  return (
    <Box
      className={classes.mainSection}
      style={{ backgroundImage: "url(images/resto/tabbg.png)" }}
    >
      <Box style={{ maxWidth: "260px" }} className="animation">
        <img src="images/resto/red_chili_2.png" />
      </Box>
      <TopMenuList />
      <Container maxWidth="lg">
        <Box className={classes.tabTop}>
          <Box
            className={
              tabview === "chai" ? classes.chaiBtn : classes.chaibtnunactive
            }
            onClick={() => setTabView("chai")}
          >
            <Typography variant="h3"> CHAI</Typography>
          </Box>
          <Box
            className={
              tabview === "biryani" ? classes.chaiBtn : classes.chaibtnunactive
            }
            onClick={() => setTabView("biryani")}
          >
            <Typography variant="h3">BIRYANI</Typography>
          </Box>
        </Box>
        {tabview === "chai" && <ChaiTabSection />}
        {tabview === "biryani" && <BiryaniTabSection />}
        {/* <Button>Delivery</Button>
        <Button>Dining Out</Button>
        <Button>NightLife</Button> */}
        {/* <Box>
          <Divider />
        </Box> */}
      </Container>
    </Box>
  );
}
