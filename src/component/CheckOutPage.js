import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Slider from "react-slick";
import QRCode from "react-qr-code";
const useStyles = makeStyles((theme) => ({
  mainSection: {
    boxShadow: "0 2px 4px rgb(220 222 230 / 40%)",
    borderRadius: "5px",
    padding: "30px",
    marginBottom: "20px",
    marginTop: "20px",
    "& h3": {
      color: "#fff",
      paddingBottom: "20px",
    },
    "& h6": {
      color: "#05c16e",
      paddingBottom: "20px",
    },
    "& .upiSection": {
      display: "flex",
      alignItems: "center",
      borderBottom: "dotted",
    },
    "& .upiChild": {
      marginTop: "10px",
      cursor: "pointer",
      width: "70px",

      "& h6": {
        color: "#fff",
        paddingTop: "10px",
      },
    },
    "& .upiChild1": {
      marginTop: "20px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      "& h6": {
        color: "#fff",
        paddingTop: "15px",
      },
    },
    "& .qrcodeSection": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
}));

const upiData = [
  {
    title: "UPI",
    img: "images/resto/bhim-upi.svg",
  },
  {
    title: "RUPAY",
    img: "images/resto/ruPay.svg",
  },
];
const upiData1 = [
  {
    title: "Phonepe",
    img: "images/resto/phonePe.svg",
  },
  {
    title: "Google Pay",
    img: "images/resto/googlePay.svg",
  },
  {
    title: "Amazon Pay",
    img: "images/resto/amz.svg",
  },
  {
    title: "ICICI",
    img: "images/resto/icici.svg",
  },
  {
    title: "Visa",
    img: "images/resto/visa.svg",
  },
  {
    title: "Mastercard",
    img: "images/resto/mastercard.svg",
  },
  {
    title: "Net Banking",
    img: "images/resto/netbanking.svg",
  },
];

export default function CheckOutPage() {
  const classes = useStyles();
  const settings = {
    dots: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    className: "recomended",
    autoplay: false,
    dots: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 7,
          centerMode: false,
          centerPadding: "20px",
          autoplay: false,
          dots: false,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          centerMode: false,
          centerPadding: "20px",
          autoplay: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding: "20px",
          autoplay: true,
        },
      },
    ],
  };
  return (
    <Container maxWidth="md">
      <Box className={classes.mainSection}>
        <Box>
          <Box className="qrcodeSection">
            <Typography variant="h3">UPI, Net banking and cards</Typography>
            <div
              style={{
                maxWidth: 164,
                width: "100%",
              }}
            >
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value="10000"
                viewBox={`0 0 256 256`}
              />
            </div>
          </Box>
          <Typography variant="h6">Zero transaction charges</Typography>
          <Box className="upiSection">
            {upiData.map((data, i) => {
              return (
                <Box
                  className="upiChild"
                  style={i === 1 ? { paddingLeft: "25px" } : {}}
                >
                  <img src={data.img} />
                  <Typography variant="h6">{data.title}</Typography>
                </Box>
              );
            })}
          </Box>
          <Grid container>
            <Slider
              {...settings}
              className="width100"
              style={{ width: "100%", position: "relative" }}
            >
              {upiData1 &&
                upiData1?.map((data, i) => {
                  return (
                    <Grid item xs={12} md={12} lg={12} key={i}>
                      <Box
                        style={{
                          display: "flex",

                          alignItems: "center",
                        }}
                      >
                        <Box
                          className="upiChild1"
                          style={
                            i === 2
                              ? { marginTop: "10px" }
                              : i === 0
                              ? { marginTop: "13px" }
                              : {}
                          }
                        >
                          <img src={data.img} />
                          <Typography
                            style={i === 1 ? { paddingTop: "20px" } : {}}
                            variant="h6"
                          >
                            {data.title}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
            </Slider>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
