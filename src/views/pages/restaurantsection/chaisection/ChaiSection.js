import Heading from "src/component/Heading";
import { Box, Grid } from "@material-ui/core";
import React from "react";
import ChaiData from "./ChaiData";

const chaiData = [
  {
    img: "images/resto/chai_1.jpg",
    title: "Card Title",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/chai_2.jpg",
    title: "Card Title",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/chai_3.jpg",
    title: "Card Title",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/chai_4.jpg",
    title: "Card Title",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/chai_5.jpg",
    title: "Card Title",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/chai_6.webp",
    title: "Card Title",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/chai_7.jpg",
    title: "Card Title",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/chai_8.jpg",
    title: "Card Title",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/chai_4.jpg",

    title: "Card Title",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/chai_5.jpg",

    title: "Card Title",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/chai_7.jpg",

    title: "Card Title",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/chai_8.jpg",
    title: "Card Title",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
];

export default function ChaiSection() {
  return (
    <Box mt={3}>
      <Grid container spacing={2}>
        {chaiData.map((data) => {
          return (
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <ChaiData data={data} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
