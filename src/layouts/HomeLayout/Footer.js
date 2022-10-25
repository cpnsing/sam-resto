import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  ListItem,
  List,
  Link,
  IconButton,
} from "@material-ui/core";
import { useHistory, Link as RouterLink } from "react-router-dom";
import Scroll from "react-scroll";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "src/component/Logo";
import SubscriptionPage from "src/component/SubscriptionPage";
const ScrollLink = Scroll.Link;

const useStyles = makeStyles((theme) => ({
  footerSection: {
    overflow: "hidden",
    // background: "#000",
    background: "url(images/resto/footer_bg_3.jpg)",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    padding: "30px 0px",
    zIndex: "2",
    "& .displayColumn": {
      [theme.breakpoints.only("xs")]: {
        flexDirection: "column!important",
      },
    },
    "& .bottomText": {
      [theme.breakpoints.only("xs")]: {
        justifyContent: "center",
      },
    },

    "& .responsiveText": {
      [theme.breakpoints.only("xs")]: {
        marginTop: "20px",
      },
    },
    "& .coprightBox": {
      [theme.breakpoints.only("xs")]: {
        marginTop: "-14px",
        marginBottom: "12px",
      },
    },

    "& .clipborder": {
      marginLeft: "10px",
    },

    "& p": {
      [theme.breakpoints.down("xs")]: {
        // fontSize: "12px !important",
        maxWidth: "100%",
      },
    },
    "& a": {
      color: "#fff",
      display: "flex",
      fontSize: "13px",
      alignItems: "center",
      fontWeight: "300",
      textDecoration: "none",
      lineHeight: "28px",
      cursor: "pointer",
      // textTransform: "uppercase",
      "&:hover": {
        color: "#0E52D5",
        textDecoration: "none",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
        lineHeight: "10px",
      },
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Box className={classes.footerSection}>
        <Container maxWidth="lg">
          <SubscriptionPage />
          <Grid container>
            <Grid itme lg={3}>
              <Box mt={3}>
                <Box className="displayStart coprightBox">
                  <Typography variant="body1" className="bottomText">
                    About Restaurant
                  </Typography>
                  <Typography>
                    Quickly supply alternative strategic theme areas vis-a-vis
                    B2C mindshare. Objectively repurpose stand-alone synergy via
                    user-centric architectures.
                  </Typography>
                </Box>
                <Box className="displayStart">
                  <IconButton
                    className="socialIconBox"
                    onClick={() => window.open(" https://www.facebook.com/")}
                  >
                    <FaFacebookF />
                  </IconButton>
                  <IconButton
                    className="socialIconBox"
                    onClick={() => window.open(" https://twitter.com/")}
                  >
                    <FaTwitter />
                  </IconButton>
                  <IconButton
                    className="socialIconBox"
                    onClick={() => window.open(" https://www.instagram.com/")}
                  >
                    <FaInstagram />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid lg={3}>
              <Box>
                <Box className="displayStart responsiveText">
                  <Typography
                    variant="body1"
                    className="clipborder"
                    to="/about"
                    component={RouterLink}
                  >
                    ABOUT
                  </Typography>
                  <Typography
                    variant="body1"
                    className="clipborder"
                    to="/contact"
                    component={RouterLink}
                  >
                    CONTACT
                  </Typography>
                  <Typography
                    variant="body1"
                    className="clipborder"
                    to="/feedback"
                    component={RouterLink}
                  >
                    FEEDBACK
                  </Typography>
                  {/* <Typography variant="body1" className="clipborder" to="/news-details" component={RouterLink}>
                                CAREERS

                            </Typography> */}
                  <Typography
                    variant="body1"
                    className="clipborder"
                    to="/disclaimer"
                    component={RouterLink}
                  >
                    DISCLAIMER
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={3}>
              <Box mt={2}>
                <Typography
                  variant="body1"
                  className="clipborder"
                  to="/terms"
                  component={RouterLink}
                >
                  Terms and Conditions
                </Typography>
                <Typography
                  variant="body1"
                  className="clipborder"
                  to="/privacy"
                  component={RouterLink}
                >
                  Privacy Policy
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={3}>
              <Box mt={2}>
                <Typography
                  variant="body1"
                  className="clipborder"
                  to="/terms"
                  component={RouterLink}
                >
                  Terms and Conditions
                </Typography>
                <Typography
                  variant="body1"
                  className="clipborder"
                  to="/privacy"
                  component={RouterLink}
                >
                  Privacy Policy
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
