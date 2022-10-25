import React, { useState } from "react";
import {
  Box,
  makeStyles,
  Paper,
  Typography,
  Button,
  Grid,
  Divider,
  Dialog,
  DialogContent,
  IconButton,
} from "@material-ui/core";

import StarsIcon from "@material-ui/icons/Stars";
import { Link, useHistory } from "react-router-dom";
import DetailsPage from "src/views/pages/restaurantsection/DetailsPage";
import { MdCancel } from "react-icons/md";
const useStyles = makeStyles((theme) => ({
  bannerImg: {
    position: "relative",
    // filter: "drop-shadow(0px 24px 54px rgba(13, 167, 233, 0.25))",
    background: "#101D29",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0px 3px 15px rgb(1 15 28 / 8%)",
    cursor: "pointer",
    // border: "2px solid #19999A",

    "& img": {
      width: "auto",
      width: "100%",
      maxHeight: "200px",
    },

    "& p": {
      display: "flex",
      fontWeight: "500",
      color: "#ffffff",
      fontSize: "13px",
      "& span": {
        color: "#28e7f0",
      },
    },
  },
  carbox: {
    position: "relative",
    padding: "35px 26px 75px 24px",
    borderRadius: "9px",
    transition: "0.3s",
    marginLeft: "7px",
    transition: "0.4s",
    maxHeight: "171px",

    // "&:hover": {
    //   background: "linear-gradient(19.68deg, #075F7D 22%, #012633 67.37%)",
    //   transform: "scale(1.1)",
    // },
  },
  dummybox: {
    minHeight: "169px",
    background: "#07030d91",
    "& h5": {
      display: "flex",
      fontWeight: "500",
      color: "#ffffff",
    },
  },
  box: {
    backgroundColor: "#241B30",
    padding: "20px",
  },
  headtext: {
    "& h2": {
      fontSize: "25px",
      fontWeight: "500",
      color: "#ffffff",
    },
    "& p": {
      fontSize: "16px",
      fontWeight: "400",
      color: "#ffffff",
      paddingTop: "10px",
      "@media(max-width:768px)": {
        fontSize: "20px",
      },
    },
  },
  price: {
    fontSize: "18px",
    fontWeight: "300",
    color: "#ffffff",
    paddingTop: "30px",
    paddingBottom: "10px",
    backgroundColor: "#231437 ",
  },
  btnbox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    fontSize: "20px",
    backgroundColor: "#2D2D4A",
    paddingTop: "4px",
    paddingBottom: "4px",
    borderRadius: "21px",
  },
  price: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "11px",
    // backgroundColor: "#231437 ",
    "& h4": {
      fontSize: "16px",
      fontWeight: "500",
      color: "#fff",

      letterSpacing: "1px",
    },
  },
  icons: {
    backgroundColor: "#FA1C5F",
    color: "#3D122F",
    borderRadius: "50px",
    fontSize: "36px",
  },

  pricesection: {
    marginTop: "5px",
    "& h6": {
      fontSize: "16px",
      lineHeignt: "20px",
      fontWeight: "500",
      color: "#AE8C3F",
      letterSpacing: "1px",
    },
    "& p": {
      fontSize: "13px",
      fontWeight: "300",
      display: "block",
    },
  },
  cardImages: {
    width: "100%",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    overflow: "hidden",
    "& img": {
      borderRadius: "5px",
      width: "100%",
      objectFit: "cover",
      height: "200px",

      transition: "0.4s",
      "&:hover": {
        background: "linear-gradient(19.68deg, #075F7D 22%, #012633 67.37%)",
        transform: "scale(1.1)",
      },
    },
  },
}));

export default function BlackMarketCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const { data, index } = props;
  const [openDetailPop, setOpenDetailPop] = useState(false);
  console.log("openDetailPop---", openDetailPop);
  const [openDetail, setOpenDetail] = useState({});

  const HandleDetail = (data) => {
    setOpenDetailPop(true);
    setOpenDetail(data);
  };

  // const updateDimensions = () => {
  //   var offsetWidth = document.getElementById(
  //     "imagecard" + (data?._id ? data?._id : data?.nftId?._id)
  //   ).offsetWidth;
  //   var newoofsetWidth = offsetWidth - 80;
  //   document.getElementById(
  //     "imagecard" + (data?._id ? data?._id : data?.nftId?._id)
  //   ).style.height = newoofsetWidth + "px";
  // };
  // useEffect(() => {
  //   updateDimensions();
  // }, [data, data?._id ? data?._id : data?.nftId?._id]);
  // useEffect(() => {
  //   window.addEventListener("resize", updateDimensions);
  //   return () => window.removeEventListener("resize", updateDimensions);
  // }, []);

  return (
    <>
      <Box className={classes.gallryBox}>
        <Box className={classes.bannerImg}>
          <Box
            className={classes.cardImages}
            onClick={() => {
              history.push({
                pathname: "/detail_page",
                state: {
                  data: data,
                },
              });
            }}
          >
            <img src={data?.images} alt="" />
          </Box>
          <Box className={classes.carbox}>
            <Box classname={classes.dummybox} style={{ minHeight: "169px" }}>
              <Box mt={2}>
                <Typography variant="h4" style={{ color: "#25FCFF" }}>
                  {data.name}
                </Typography>
              </Box>
              <Box className={classes.price}>
                <Typography variant="body1">{data.description}</Typography>
              </Box>

              <Grid container spacing={1} className={classes.pricesection}>
                <Grid item xs={6}>
                  <Typography variant="body2">{data.position}</Typography>
                </Grid>
                <Grid item xs={6} align="right">
                  <Typography variant="body2">{data.text5}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" color="secondary">
                    + Add{" "}
                  </Button>
                </Grid>
                <Grid item xs={6} align="right">
                  {data?.subitems.map((item) => (
                    <>
                      <Typography variant="h6">${item.price}</Typography>
                    </>
                  ))}
                </Grid>
              </Grid>
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
    </>
  );
}
