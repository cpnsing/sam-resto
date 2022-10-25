import Rating from "src/component/Rating";
import { Box, Dialog, makeStyles, Typography } from "@material-ui/core";
import {
  AddShoppingCart,
  FavoriteBorder,
  Visibility,
} from "@material-ui/icons";

import React from "react";
import { useState } from "react";
import DetailsPage from "../DetailsPage";

const useStyles = makeStyles((theme) => ({
  cardsList: {
    zIndex: 0,
    width: "100%",
    "& .card": {
      width: "100%",
      height: "300px",
      borderRadius: "10px",
      border: "1px solid gray",
      maxHeight: "160px",
      overflow: "hidden",
      boxShadow:
        "5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22)",
      cursor: "pointer",
      transition: "0.4s",
      "@media(max-width:441px)": {
        minHeight: "190px",
        maxHeight: "190px",
      },
      "&:hover": {
        boxShadow:
          "5px 5px 30px 15px rgba(0,0,0,0.25), \n    -5px -5px 30px 15px rgba(0,0,0,0.22)",
        "& .cardimage": {
          "& img": {
            transform: "scale(1.1)",
          },
        },
      },
    },
    "& .cardimage": {
      display: "flex",
      width: "inherit",
      height: "inherit",
      borderRadius: "10px",
      maxHeight: "160px",
      "& img": {
        width: "inherit",
        height: "inherit",
        borderRadius: "10px",
        objectFit: "cover",
        maxWidth: "150px",
        maxHeight: "160px",
        transition: "0.4s",
        "@media(max-width:441px)": {
          minHeight: "190px",
          maxHeight: "190px",
        },
      },
    },
    "& .cardtitle": {
      borderRadius: "0px 0px 40px 40px",
      padding: "10px 5px 0px 15px",
      "& h5": {
        fontFamily: "sans-serif",
        fontWeight: "bold",
        fontSize: "20px",
        color: "#fff",
      },
      "& h6": {
        fontSize: "14px",
        color: "#E0E0E0",
      },
      "& h4": {
        fontSize: "16px",
        color: "#eb0029",
        fontWeight: "600",
      },
    },
  },
  ratingSection: {
    paddingBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media(max-width:441px)": {
      display: "block",
    },
    "& icon": {
      background: "rgba(255,255,255,0.2)",
    },
  },
  iconSection: {
    "& svg": {
      background: "rgba(255,255,255,0.2)",
      padding: "5px",
      borderRadius: "50px",
      color: "#fff",
      marginRight: "3px",
    },
  },
}));

export default function ChaiData({ data }) {
  const classes = useStyles();
  const [openDetailPop, setOpenDetailPop] = useState(false);
  const [openDetail, setOpenDetail] = useState({});
  console.log("openDetail-----", openDetail);

  const HandleDetail = (data) => {
    setOpenDetailPop(true);
    setOpenDetail(data);
  };

  return (
    <Box className={classes.cardsList}>
      <Box className="card">
        <Box className="cardimage">
          <img src={data.img} />

          <Box className="cardtitle title-white">
            <Box className={classes.ratingSection}>
              <Typography variant="h5">{data.title}</Typography>
              <Rating />
            </Box>
            <Typography variant="h6">{data.description}</Typography>
            <Box className={classes.ratingSection}>
              <Typography variant="h4">${data.price}</Typography>
              <Box className={classes.iconSection}>
                <Visibility onClick={() => HandleDetail(data)} />
                <AddShoppingCart
                  style={{
                    background: "#eb0029",
                  }}
                />
                <FavoriteBorder />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {openDetailPop && (
        <Dialog
          open={openDetailPop}
          onClose={() => setOpenDetailPop(false)}
          fullWidth
          maxWidth="lg"
          style={{ overflow: "hidden" }}
        >
          <DetailsPage
            setOpenDetailPop={setOpenDetailPop}
            openDetail={openDetail}
          />
        </Dialog>
      )}
    </Box>
  );
}
