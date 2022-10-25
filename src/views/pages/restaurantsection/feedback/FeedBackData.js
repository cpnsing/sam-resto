import Rating from "src/component/Rating";
import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  mainSection: {
    position: "relative",
    background: "#101D29",
    boxShadow: "0px 3px 15px rgb(1 15 28 / 8%)",
    borderRadius: "20px",
    padding: "40px",
    maxWidth: "456px",
    height: "300px",
    marginLeft: "10px",
    margin: "20px 0px",
    "& .reviewSection": {
      position: "absolute",
      right: "0",
      bottom: "0",
      "& img": {
        borderBottomRightRadius: "20px",
      },
    },
    "& h3": {
      color: "#E0E0E0",
      fontSize: "16px",
      marginBottom: "16px",
    },
    "& h4": {
      fontSize: "20px",
      marginBottom: "2px",
      fontWeight: "600",
      color: "#fff",
    },
    "& .childSection": {
      marginBottom: "21px",
    },
    "& .childSectionRating": {
      marginBottom: "23px",
    },
    "& .avatarSectio": {
      display: "flex",
      alignItems: "center",
      "& h5": {
        fontSize: "14px",
        color: "#E0E0E0",
      },
    },
  },
}));

export default function FeedBackData({ data }) {
  const classes = useStyles();
  return (
    <Box className={classes.mainSection}>
      <Box className="childSection">
        <img src="images/resto/quote_left.svg" />
      </Box>

      <Typography variant="h3">{data.msg}</Typography>
      <Box className="childSectionRating">
        <Rating />
      </Box>
      <Box className="avatarSectio">
        <Avatar src="images/resto/testi_1_3.jpg" />
        <Box pl={3}>
          <Typography variant="h4">{data.name}</Typography>
          <Typography variant="h5">To, India</Typography>
        </Box>
      </Box>
      <Box className="reviewSection">
        <img src="images/resto/review_1_2.png" />
      </Box>
    </Box>
  );
}
