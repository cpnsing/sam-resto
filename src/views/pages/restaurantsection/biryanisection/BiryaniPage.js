import Heading from "src/component/Heading";
import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import ChaiData from "../chaisection/ChaiData";
const chaiData = [
  {
    img: "images/resto/biryani1.webp",
    title: "Hydrabadi Biryani",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/biryani2.webp",
    title: "Chicken Biryani",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/biryani3.webp",
    title: "Chicken Lollipop",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/biryani4.webp",
    title: "Chicken Roasted",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/biryani6.webp",
    title: "Chciken Tandoori",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/biryani1.webp",
    title: "Chicken Biryani",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/biryani2.webp",
    title: "Chicken Biryani",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/biryani3.webp",
    title: "Chicken Biryani",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/biryani4.webp",
    title: "Chicken Biryani",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/biryani6.webp",
    title: "Chicken Biryani",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/biryani1.webp",
    title: "Chicken Biryani",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
  {
    img: "images/resto/biryani2.webp",
    title: "Chicken Biryani",
    description:
      "Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.",
    price: "100",
  },
];

export default function BiryaniPage() {
  return (
    <Box mt={3} pb={3}>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          {chaiData.map((data) => {
            return (
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <ChaiData data={data} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
