import { Box, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    paddingTop: "30px",

    "& svg": {
      borderRadius: "5px",
      background: "#e0e0e0",
      color: "#000",
      padding: "10px",
      "&:hover": {
        background: "#f47153",
        color: "#fff",
      },
    },
  },
}));

export default function SocialMedia() {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.iconButton}>
        <IconButton>
          <FaFacebook />
        </IconButton>
        <IconButton>
          <FaTwitter />
        </IconButton>
        <IconButton>
          <ImInstagram />
        </IconButton>
        <IconButton>
          <FaLinkedin />
        </IconButton>
      </Box>
    </Box>
  );
}
