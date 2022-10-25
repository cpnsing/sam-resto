import React from "react";
import { Box, Grid } from "@material-ui/core";
import ExploreCard from "src/component/ExploreCard";

const TeamMap = [
  {
    image1: "images/5.png",
    bPrice: "23",
    text1: "Blackhawk (Stutz)",
    text2: "0/0/0",
    text3: "#4023",
    text4: "Min Bid",
    text5: "Price",
    text6: "0.2",
    text7: "4",
  },
  {
    image1: "images/1.png",
    bPrice: "73",
    text1: "Tiger (Sunbeam)",
    text2: "Alberts",
    text3: "#4023",
    text4: "Min Bid",
    text5: "Price",
    text6: "0.2",
    text7: "4",
  },
  {
    image1: "images/3.png",
    bPrice: "95",
    text1: "Sunbird (Pontiac)",
    text2: "Alberts",
    text3: "#4023",
    text4: "Min Bid",
    text5: "Price",
    text6: "0.2",
    text7: "4",
  },
  {
    image1: "images/4.png",
    bPrice: "85",
    text1: "Borno",
    text2: "Alberts",
    text3: "#4023",
    text4: "Min Bid",
    text5: "Price",
    text6: "0.2",
    text7: "4",
  },
  {
    image1: "images/1.png",
    bPrice: "19",
    text1: "NK20",
    text2: "Alberts",
    text3: "#4023",
    text4: "Min Bid",
    text5: "Price",
    text6: "0.2",
    text7: "4",
  },
  {
    image1: "images/3.png",
    bPrice: "12",
    text1: "BLACK KI",
    text2: "Alberts",
    text3: "#4023",
    text4: "Min Bid",
    text5: "Price",
    text6: "0.2",
    text7: "4",
  },
  {
    image1: "images/4.png",
    bPrice: "84",
    text1: "Eagle (AMC)",
    text2: "Alberts",
    text3: "#4023",
    text4: "Min Bid",
    text5: "Price",
    text6: "0.2",
    text7: "4",
  },
  {
    image1: "images/5.png",
    bPrice: "16",
    text1: "Lark (Studebaker)",
    text2: "Alberts",
    text3: "#4023",
    text4: "Min Bid",
    text5: "Price",
    text6: "0.2",
    text7: "4",
  },
];
export const exploreData = [
  {
    user: "@Alex",
    likes: "152",
    time: "8h : 15m : 25s left",
    stock: "4 in stock",
    text3: "From 1.35 ETH 11/Bid 1.1 w",
    image: "images/Explore/Explore1.png",
    name: "Skyblue Creator",
    price: "0.004 ETH",
  },
  {
    user: "@Alex",
    likes: "152",
    time: "8h : 15m : 25s left",
    stock: "4 in stock",
    text3: "From 1.35 ETH 11/Bid 1.1 w",
    image: "images/Explore/Explore2.png",
    name: "Skyblue Creator",
    price: "0.004 ETH",
  },
  {
    user: "@Alex",
    likes: "152",
    time: "8h : 15m : 25s left",
    stock: "4 in stock",
    text3: "From 1.35 ETH 11/Bid 1.1 w",
    image: "images/Explore/Explore3.png",
    name: "Skyblue Creator",
    price: "0.004 ETH",
  },
];
const Owned = () => {
  return (
    <Box>
      <Grid container spacing={3}></Grid>
    </Box>
  );
};
export default Owned;
