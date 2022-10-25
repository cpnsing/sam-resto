import React from "react";
import PropTypes from "prop-types";
import { Box, Container, makeStyles } from "@material-ui/core";
import TopBar from "./TopBar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

AOS.init({ once: true });

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
    paddingTop: "100px",
    // background: theme.palette.background.default,
    background: "#000",
  },
  wrapper: {
    paddingTop: "30px",
    paddingBottom: "30px",

    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    minHeight: "280px",
    "@media (max-width:767px)": {
      paddingTop: "50px",
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "hidden",
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TopBar />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
      <Footer />
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
