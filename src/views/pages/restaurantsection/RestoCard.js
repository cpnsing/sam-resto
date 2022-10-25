import BlackMarketCard from "src/component/ExploreCard";
import React, { useState } from "react";

import { foodData } from "src/data/index";
import { makeStyles, Box, Grid, Container } from "@material-ui/core";
import Category from "./Category";
import VerificationModal from "./modal/VerificationModal";
import AdPost from "src/component/AdPost";
import Slider from "react-slick";
import Heading from "src/component/Heading";
import TabSection from "./tabsection/TabSection";
import FeedBack from "./feedback/FeedBack";
import TopMenuList from "./tabsection/TopMenuList";
import LatestFood from "./latestfood/LatestFood";
const useStyles = makeStyles((theme) => ({
  root: {},
}));

const foodData1 = [
  {
    title: "Fast Food",
    image: "images/resto/bg1.webp",
  },
  {
    title: "Fast Food 1",
    image: "images/resto/bg2.webp",
  },
  {
    title: "Fast Food 2",
    image: "images/resto/bg1.webp",
  },
];

export default function RestoCard() {
  console.log("foodData----", foodData);
  const classes = useStyles();
  const [tabview, setTabview] = useState(0);
  const [dataList, setDataList] = useState({});
  const settings = {
    dots: true,
    slidesToShow: 1,
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
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "20px",
          autoplay: false,
          dots: false,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
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
    <div>
      <VerificationModal />
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
                  <AdPost data={data} />
                </Grid>
              );
            })}
        </Slider>
      </Grid>
      <TabSection />
      <Container maxWidth="lg">
        <Box className={classes.root}>
          {/* <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                mt={2}
                mb={2}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Heading heading="Category" />
              </Box>
            </Grid>
            {foodData.categorys &&
              foodData.categorys.map((data, i) => {
                return (
                  <Grid
                    item
                    xs={12}
                    lg={3}
                    sm={4}
                    md={4}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box
                      item
                      xs={1}
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Category
                        data={data}
                        type="card"
                        index={i}
                        dataList={dataList}
                        setTabview={setTabview}
                        setDataList={setDataList}
                      />
                    </Box>
                  </Grid>
                );
              })}
          </Grid> */}
          <Grid item xs={12}>
            <Box>
              <TopMenuList />
              <FeedBack />
            </Box>
          </Grid>
          {/* <Grid item xs={12}>
            <Box>
              <TopMenuList />
              <LatestFood />
            </Box>
          </Grid> */}

          <Grid item xs={12}>
            <Box
              mt={2}
              mb={2}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Heading heading="All Items" />
            </Box>
          </Grid>

          <Grid container spacing={2}>
            {foodData.menuitems &&
              foodData.menuitems.map((data, i) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={4} key={i}>
                    <BlackMarketCard data={data} type="card" index={i} />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
