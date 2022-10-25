import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import Slider from "react-slick";
import FeedBackData from "./FeedBackData";

const foodData1 = [
  {
    title: "Fast Food",
    image: "images/resto/bg1.webp",
    msg: "“Synergistically strategize interdependent ROI through distinctive markets. Credibly restore one-to-one through.”",
    name: "Alok",
  },
  {
    title: "Fast Food 1",
    image: "images/resto/bg2.webp",
    msg: "“Synergistically strategize interdependent ROI through distinctive markets. Credibly restore one-to-one through.”",
    name: "Alok",
  },
  {
    title: "Fast Food 2",
    image: "images/resto/bg1.webp",
    msg: "“Synergistically strategize interdependent ROI through distinctive markets. Credibly restore one-to-one through.”",
    name: "Alok",
  },
  {
    title: "Fast Food 2",
    image: "images/resto/bg1.webp",
    msg: "“Synergistically strategize interdependent ROI through distinctive markets. Credibly restore one-to-one through.”",
    name: "Alok",
  },
  {
    title: "Fast Food 2",
    image: "images/resto/bg1.webp",
    msg: "“Synergistically strategize interdependent ROI through distinctive markets. Credibly restore one-to-one through.”",
    name: "Alok",
  },
];

export default function FeedBack() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,

    infinite: true,
    className: "recomended",
    autoplay: true,

    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding: "20px",
          autoplay: false,
          dots: false,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "20px",
          autoplay: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "20px",
          autoplay: true,
        },
      },
    ],
  };
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Slider
            {...settings}
            className="width100"
            style={{ width: "100%", position: "relative" }}
          >
            {foodData1 &&
              foodData1?.map((data, i) => {
                return (
                  <Grid item xs={12} md={12} lg={12} key={i}>
                    <FeedBackData data={data} />
                  </Grid>
                );
              })}
          </Slider>
        </Grid>
      </Container>
    </Box>
  );
}
