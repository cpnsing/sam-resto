import Page from "src/component/Page";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  IconButton,
  Grid,
  Button,
} from "@material-ui/core";
import React from "react";
import { MdCancel } from "react-icons/md";
import { useHistory } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Rating } from "@material-ui/lab";
import SocialMedia from "src/component/SocialMedia";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  commentfullBox: {
    position: "relative",
    overflow: "hidden",
    // maxHeight: "350px",
    "& .canelIcon": {
      display: "flex",
      justifyContent: "end",
      fontSize: "30px",
    },
  },
  rightBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      minHeight: "200px",
    },
    "& .imgSection": {
      borderRadius: "10px",
      objectFit: "cover",
      width: "100%",
      maxHeight: "596px",
      overflow: "hidden",
    },
    "& img": {
      width: "auto",
      maxWidth: "100%",

      borderRadius: "10px",
      objectFit: "cover",
      width: "100%",
      height: "auto",
    },
    "& video": {
      width: "auto",
      maxWidth: "100%",
      maxHeight: "90vh",
    },
  },
  commentBox: {
    borderTop: "0.5px solid #737373",
    borderBottom: "0.5px solid #737373",
    marginTop: "16px",
    padding: "5px 0",
    "& button": {
      "& svg": {
        fontSize: "20px",
        marginRight: "5px",
      },
    },
  },
  searchaddress: {
    paddingTop: "16px",
    "& .figure": {
      margin: "0",
      marginRight: "15px",
      position: "relative",
      "& .profileimage": {
        display: "flex",
        height: "50px",
        width: "50px",
        borderRadius: "50%",
        overflow: "hidden",
        backgroundColor: "#101010",
        [theme.breakpoints.down("xs")]: {
          height: "40px",
          width: "40px",
        },
        "& img": {
          width: "auto",
          maxWidth: "100%",
          maxHeight: "50px",
        },
      },
    },
    "& button": {
      backgroundColor: "#373636",
      height: "40px",
      borderRadius: "5px",
      [theme.breakpoints.down("xs")]: {
        height: "40px",
      },
    },
  },
  mainBox: {
    padding: "20px",
  },
  emojiBox: {
    position: "absolute",
    width: "100%",
    zIndex: "100",
    // bottom: "647px",
  },
  priceSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "20px",
    "& h3": {
      fontSize: "30px",
      paddingBottom: "10px",
    },
    "& h4": {
      fontSize: "20px",
      paddingBottom: "7px",
      color: "red",
    },
    "& h5": {
      fontSize: "16px",
      paddingBottom: "7px",
      color: "#f2f2f2",
      paddingBottom: "14px",
    },
    "& .cartSection": {
      display: "flex",
      "& .cartSectionChild": {
        marginRight: "3px",
        borderRadius: "10px",
        border: "2px solid #e0e0e0",
        width: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "& input": {
          maxWidth: "30px",
          background: "transparent",
          border: "none",
          outline: "none",
          color: "white",
        },
      },
      "& .cartSectionSubChild": {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        borderLeft: "2px solid #e0e0e0",
        height: "100%",
        padding: "0px 0px 0px 18px",
      },
    },
  },
  iconSection: {
    padding: "12px 20px",
    background: "#000",
    borderRadius: "10px",
    marginLeft: "5px",
    "&:hover": {
      background: "#f47153",
    },
  },
  rating: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "8px",
  },
}));

export default function DetailsPage({ setOpenDetailPop, openDetail }) {
  console.log("openDetail------", openDetail);
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState(4);
  const [priceValue, setPriceValue] = useState(1);
  return (
    <Page title="Detail Page" style={{ overflow: "hidden" }}>
      <Container maxWidth="lg" style={{ overflow: "hidden" }}>
        <Box className={classes.commentfullBox}>
          {setOpenDetailPop === "viewPage" ? (
            ""
          ) : (
            <Box className="canelIcon">
              <IconButton aria-label="cancle">
                <MdCancel onClick={() => setOpenDetailPop(false)} />
              </IconButton>
            </Box>
          )}

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box className={classes.rightBox}>
                <Box className="imgSection">
                  <img
                    src={
                      openDetail?.images ? openDetail?.images : openDetail?.img
                    }
                    style={{ cursor: "pointer" }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              style={{ display: "flex" }}
            >
              <Box className={classes.priceSection}>
                <Box>
                  <Box className={classes.rating}>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                    <span>(10 Customer reviews)</span>
                  </Box>
                  <Typography variant="h3">
                    {openDetail.name ? openDetail.name : ""}
                  </Typography>
                  {openDetail?.subitems ? (
                    <Typography variant="h4">
                      $
                      {openDetail?.subitems[0] &&
                        openDetail?.subitems[0]?.price * priceValue}
                    </Typography>
                  ) : (
                    <Typography variant="h4">
                      ${openDetail?.price * priceValue}
                    </Typography>
                  )}

                  <Typography variant="h5">
                    There are many variations of passages of lorem Ipum
                    available theresu anything embarrassing It’s a long
                    established fact that a reader will be looking at its
                    layout.
                  </Typography>
                  <Box className="cartSection">
                    <Box className="cartSectionChild">
                      <input
                        value={priceValue}
                        onChange={(e) => setPriceValue(e.target.value)}
                      />
                      <Box className="cartSectionSubChild">
                        <IconButton
                          style={{ padding: "0" }}
                          disabled={priceValue === 1}
                          onClick={() => {
                            if (priceValue !== 0) {
                              setPriceValue(priceValue - 1);
                            }
                          }}
                        >
                          <ExpandLess style={{ cursor: "pointer" }} />
                        </IconButton>
                        <IconButton
                          onClick={() => setPriceValue(priceValue + 1)}
                          style={{ padding: "0" }}
                        >
                          <ExpandMore style={{ cursor: "pointer" }} />
                        </IconButton>
                      </Box>
                    </Box>
                    <Button variant="contained" color="secondary">
                      ADD TO CART
                    </Button>
                    <IconButton className={classes.iconSection} style={{}}>
                      <FavoriteBorderIcon />
                    </IconButton>
                  </Box>

                  <SocialMedia />
                </Box>
              </Box>

              <Box></Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Page>
  );
}
