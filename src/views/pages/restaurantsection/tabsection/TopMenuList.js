import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  mainSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "70px 0px",

    "& .childSection": {
      display: "flex",
      alignItems: "center",
      padding: "0px 0px 10px 0px",
      textAlign: "center",
      "& h3": {
        color: "#eb0029",
        fontSize: "20px",
        paddingLeft: "5px",
        textAlign: "center",
      },
    },
    "& h2": {
      fontSize: "32px",
      color: "#fff",
      paddingBottom: "15px",
      textAlign: "center",
    },
    "& span": {
      color: "#eb0029",
    },
    "& h6": {
      color: "#E0E0E0",
      textAlign: "center",
    },
  },
}));

export default function TopMenuList() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Box className={classes.mainSection}>
        <Box className="childSection">
          <img src="images/resto/title_icon.svg" />
          <Typography variant="h3">Popular Menu</Typography>
        </Box>

        <Typography variant="h2">
          Our Popular Delicious <span>Foods</span>
        </Typography>
        <Typography variant="h6">
          Objectively pontificate quality models before intuitive information.
          Dramatically recaptiualize multifunctional materials.
        </Typography>
      </Box>
    </Container>
  );
}
