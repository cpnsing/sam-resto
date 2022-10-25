import Heading from "src/component/Heading";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  headingSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
    background: "url(images/resto/chai4.gif)",
    backgroundSize: "contain",
    borderRadius: "10px",
    border: "1px solid #f47153",
    cursor: "pointer",
    "&:hover": {
      background: "#000",
    },
  },
  headingSection2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
    background: "url(images/resto/biryani-hyd.gif)",
    backgroundSize: "contain",
    borderRadius: "10px",
    border: "1px solid #f47153",
    cursor: "pointer",
    "&:hover": {
      background: "#000",
    },
  },
  headingSection1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  },
}));

export default function VerificationModal() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(true);
  const [item, setItem] = useState();

  const selectItem = () => {
    setItem("Chai");
    history.push("/chai");
    localStorage.setItem("chai", "chai");
  };
  const selectItem1 = () => {
    setItem("Biryani");
    history.push("/biryani");
    localStorage.setItem("chai", "Biryani");
  };
  return (
    <>
      {localStorage.getItem("chai") !== "chai" &&
        localStorage.getItem("chai") !== "Biryani" && (
          <Dialog open={open}>
            <DialogContent style={{ paddingBottom: "20px" }}>
              <Box
                onClick={() => setOpen(false)}
                style={{
                  display: "flex",
                  justifyContent: "end",
                  cursor: "pointer",
                }}
              >
                <GiCancel style={{ height: "30px", width: "30px" }} />
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box mb={1} className={classes.headingSection1}>
                    <Heading heading="Please Choose One" />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    className={classes.headingSection}
                    onClick={() => selectItem()}
                  >
                    <Box>
                      <Typography variant="h5">CHAI</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    className={classes.headingSection2}
                    onClick={() => selectItem1()}
                  >
                    <Box>
                      <Typography variant="h5">BIRYANI</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>
        )}
    </>
  );
}
