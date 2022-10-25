import {
  Box,
  Button,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import Logo from "./Logo";
import { useHistory, Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainSection: {
    padding: "30px 0px",
  },
  fieldSection: {
    display: "flex",
    alignItems: "center",
    "& input": {
      background: "#373636",
      borderRadius: "10px",
      outline: "none",
      border: "none",
    },

    "& button": {
      borderRadius: "10px",
      height: "47px",
      color: "#fff ",
      marginLeft: "5px",
      "@media(max-width:599px)": {
        height: "43px",
      },
    },
  },
  contentMsg: {
    "& h3": {
      color: "#fff",
      fontSize: "25px",
    },
  },
}));

export default function SubscriptionPage() {
  const classes = useStyles();
  return (
    <Box className={classes.mainSection}>
      <Grid container spacing={2}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Box className="displayStart">
            <RouterLink to="/">
              <Logo />
            </RouterLink>
          </Box>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Box className={classes.contentMsg}>
            <Typography variant="h3">Subscription News</Typography>
            <Typography variant="h6">
              Subscribe to the weekly newsletter for latest updates.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Box className={classes.fieldSection}>
            <TextField
              fullWidth
              placeholder="Enter your email"
              style={{ border: "none" }}
            />

            <Button variant="contained" color="secondary">
              SUBSCRIPE
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box mt={5} mb={5}>
        <Divider />
      </Box>
    </Box>
  );
}
