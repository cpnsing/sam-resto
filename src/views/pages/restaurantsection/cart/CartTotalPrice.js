import Heading from "src/component/Heading";
import {
  Box,
  Button,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainSection: {
    padding: "20px 0px",
    "& .heading1": {
      border: "1px solid gray",
      padding: "10px 5px ",
    },
    "& .checkOutBtn": {
      marginTop: "10px",
      display: "flex",
      justifyContent: "end",
    },
  },
}));

export default function CartTotalPrice() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box className={classes.mainSection}>
      <Grid container>
        <Grid item xs={12}>
          <Box className="heading">
            <Heading heading="Cart Totals" />
            <Box pt={2} pb={3}>
              <Divider />
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} sm={6} md={6} lg={6}>
          <Box className="heading1">
            <Typography variant="h5">Cart Subtotal</Typography>
          </Box>
          <Box className="heading1" style={{ padding: "51px 5px" }}>
            <Typography variant="h5">Shipping and Handling</Typography>
          </Box>
          <Box className="heading1">
            <Typography variant="h5">Order Total</Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={6} md={6} lg={6}>
          <Box className="heading1">
            <Typography variant="h5">$200</Typography>
          </Box>
          <Box className="heading1">
            <Typography variant="h5">Free Shipping</Typography>
            <Typography variant="h5">Flat Rate</Typography>
            <Typography variant="h5">
              Shipping options will be updated during checkout.
            </Typography>
            <Button>Change Address</Button>
          </Box>
          <Box className="heading1">
            <Typography variant="h5">$200</Typography>
          </Box>
          <Box className="checkOutBtn">
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => history.push("/checkout")}
            >
              CHECKOUT
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
