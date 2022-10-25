import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import { useState } from "react";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    height: "45px",
    background: "#373636",
    position: "relative",
    borderRadius: "10px",
    "@media(max-width:599px)": {
      height: "38px",
    },
    "& .locationList": {
      position: "absolute",
      top: "53px",
      background: "#373636",
      padding: "5px",
      width: "97%",
      borderRadius: "10px",
      left: "0px",
      "& h6": {
        cursor: "pointer",
        padding: "3px 3px",
        "&:hover": {
          background: "#f47153",
          borderRadius: "5px",
        },
      },
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function LocationSearch() {
  const classes = useStyles();
  const [location, setLocation] = useState("Gorakhpur");
  const [open, setOpen] = useState(false);

  return (
    <Paper component="form" className={classes.root}>
      <IconButton
        className={classes.iconButton}
        aria-label="menu"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <InputBase
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        className={classes.input}
        placeholder="location"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
      >
        <DirectionsIcon />
      </IconButton>
      {open && (
        <Box className="locationList" onClose={() => setOpen(false)}>
          <Typography
            variant="h6"
            onClick={() => {
              setLocation("Gorakhpur");
              setOpen(false);
            }}
          >
            Gorakhpur
          </Typography>
          <Typography
            variant="h6"
            onClick={() => {
              setLocation("Delhi");
              setOpen(false);
            }}
          >
            Delhi
          </Typography>
          <Typography
            variant="h6"
            onClick={() => {
              setLocation("Mumbai");
              setOpen(false);
            }}
          >
            Mumbai
          </Typography>
        </Box>
      )}
    </Paper>
  );
}
