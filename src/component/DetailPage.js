import DetailsPage from "src/views/pages/restaurantsection/DetailsPage";
import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  makeStyles,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Rating from "./Rating";
import { MdDataExploration } from "react-icons/md";
import {
  AccountCircle,
  DateRange,
  Email,
  PersonOutline,
} from "@material-ui/icons";
import { BiUser } from "react-icons/bi";

const customerReview = [
  {
    name: "Mark Jack",
    msg: "Completely build enabled web-readiness and distributed customer service. Proactively customize.",
    date: "22 April, 2022",
    profile: "images/resto/comment-author-1.jpg",
  },
  {
    name: "Mark Jack",
    msg: "Completely build enabled web-readiness and distributed customer service. Proactively customize.",
    date: "22 April, 2022",
    profile: "images/resto/comment-author-2.jpg",
  },
  {
    name: "Mark Jack",
    msg: "Completely build enabled web-readiness and distributed customer service. Proactively customize.",
    date: "22 April, 2022",
    profile: "images/resto/comment-author-3.jpg",
  },
  {
    name: "Mark Jack",
    msg: "Completely build enabled web-readiness and distributed customer service. Proactively customize.",
    date: "22 April, 2022",
    profile: "images/resto/comment-author-1.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  commentMain: {
    padding: "30px",
    border: "1px solid #e0e0e0",
    boxShadow: "0px 4px 30px rgb(1 15 28 / 6%)",
    borderRadius: "10px",
    marginBottom: "24px",
    // display: "flex",
    "& .commentImg": {
      width: "80px",
      height: "80px",
      marginRight: "20px",
      overflow: "hidden",
      borderRadius: "999px",
      "& img": {
        width: "100%",
        height: "auto",
      },
    },
    "& .commentContent": {
      "& h6": {
        paddingLeft: "5px",
      },
    },
    "& .ratingSection": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "5px",

      "& h1": {
        fontSize: "20px",
        color: "#fff",
      },
      "@media(max-width:599px)": {
        marginTop: "7px",
      },
    },
  },
  textArea: {
    "& textarea": {
      minHeight: "150px",
      paddingTop: "16px",
      paddingBottom: "17px",
      borderRadius: "20px",
      width: "99%",
      paddingLeft: "10px",
      outline: "none",
      border: "none",
      background: "#373636",
      color: "#fff",
    },
  },
  ratingReview: {
    paddingLeft: "5px",
    "& h1": {
      fontSize: "30px",
      marginBottom: "10px",
      color: "#fff",
    },
    "& .ratingChild": {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
  },
  ratingMainSection: {
    background: "#1d1e1f",
    padding: "40px",
    borderRadius: "20px",
    "& button": {
      margin: "10px 0px 0px 10px",
    },
  },
}));

export default function DetailPage() {
  const classes = useStyles();
  const location = useLocation();
  const [locatinData, setLocatinData] = useState({});
  console.log("location-----", location, locatinData);

  useEffect(() => {
    const locationData = location.state.data;
    if (locationData) {
      setLocatinData(locationData);
    }
  }, [location]);

  return (
    <Box mt={2}>
      <DetailsPage openDetail={locatinData} setOpenDetailPop="viewPage" />
      <Container>
        <Box>
          <Grid container spacing={2}>
            {customerReview.map((data) => {
              return (
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box className={classes.commentMain}>
                    <Grid container>
                      <Grid item xs={12} sm={2} md={2} lg={2}>
                        <Box className="commentImg">
                          <img src={data.profile} />
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={10} md={10} lg={10}>
                        <Box className="commentContent">
                          <Box className="ratingSection">
                            <Typography variant="h1">{data.name}</Typography>
                            <Rating />
                          </Box>
                          <Box
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "13px",
                            }}
                          >
                            <DateRange style={{ color: "#fff" }} />
                            <Typography variant="h6">{data.date}</Typography>
                          </Box>
                          <Typography>{data.msg}</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Box className={classes.ratingMainSection}>
            <Box className={classes.ratingReview}>
              <Typography variant="h1">Add a review</Typography>
              <Box className="ratingChild">
                <Typography variant="h5">Your Rating</Typography>
                <Rating />
              </Box>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box className={classes.textArea}>
                  <textarea placeholder="Write a message...." />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="text"
                  variant="outlined"
                  placeholder="Enter your name"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PersonOutline />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="email"
                  variant="outlined"
                  placeholder="Enter your email"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Button variant="contained" color="secondary">
                POST REVIEW
              </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
