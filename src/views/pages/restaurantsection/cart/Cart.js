import Heading from "src/component/Heading";
import {
  Box,
  Container,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  Button,
  Grid,
  TextField,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { foodData } from "src/data/index";
import { Delete } from "@material-ui/icons";
import CartTotalPrice from "./CartTotalPrice";

const useStyles = makeStyles((theme) => ({
  couponSection: {
    display: "flex",
    alignItems: "center",
    flexDirection: "start",
    "& input": {
      background: "#373636",
      borderRadius: "10px",
      outline: "none",
      border: "none",
    },
    "& button": {
      height: "46px",
      marginLeft: "5px",
      minWidth: "200px",
      borderRadius: "10px",
      color: "#fff",
    },
  },
  btnSection: {
    "& button": {
      height: "46px",
      marginLeft: "5px",
      minWidth: "200px",
      borderRadius: "10px",
      color: "#fff",
    },
  },
}));

export default function Cart() {
  const classes = useStyles();
  console.log("foodData----", foodData);
  return (
    <Box>
      <Container maxWidth="lg">
        <TableContainer>
          <Table>
            <TableHead component={Paper} className="headingcell">
              <TableRow>
                <TableCell align="Center" className={classes.cell}>
                  Sr.No
                </TableCell>
                <TableCell align="Center" className={classes.cell}>
                  Image
                </TableCell>
                <TableCell align="left" className={classes.cell}>
                  Product Name
                </TableCell>

                <TableCell align="Center" className={classes.cell}>
                  Price
                </TableCell>
                <TableCell align="Center" className={classes.cell}>
                  Quantity
                </TableCell>

                <TableCell align="Center" className={classes.cell}>
                  Total
                </TableCell>
                <TableCell align="Center" className={classes.cell}>
                  Remove
                </TableCell>
              </TableRow>
            </TableHead>
            {foodData &&
              foodData.menuitems.map((data, i) => {
                return (
                  <TableBody key={i}>
                    <TableRow className={classes.tbody}>
                      <TableCell align="Center" component="th" scope="row">
                        {i + 1}
                      </TableCell>
                      <TableCell align="Center">
                        <img
                          src={data?.images}
                          style={{ width: "100px", objectFit: "cover" }}
                        />
                      </TableCell>
                      <TableCell align="left">{data.name}</TableCell>

                      <TableCell align="Center">
                        {data.subitems[0].price}{" "}
                      </TableCell>
                      <TableCell align="Center">1</TableCell>
                      <TableCell align="Center">
                        {" "}
                        {data.subitems[0].price}{" "}
                      </TableCell>
                      <TableCell align="Center">
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            cursor: "pointer",
                          }}
                        >
                          <Button
                            // variant="contained"

                            color="primary"
                          >
                            <Delete />
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}
          </Table>
        </TableContainer>
        <Box mt={2}>
          <Grid container spacing={1}>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Box className={classes.couponSection}>
                <TextField
                  placeholder="Coupon Code......"
                  variant="outlined"
                  style={{ border: "none" }}
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box className={classes.couponSection}>
                <Button variant="contained" color="secondary" fullWidth>
                  APPLY COUPON
                </Button>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Box className={classes.btnSection}>
                <Button variant="contained" color="secondary" fullWidth>
                  UPDATE CART
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box className={classes.btnSection}>
                <Button variant="contained" color="secondary" fullWidth>
                  CONTINUE SHOPPING
                </Button>
              </Box>
            </Grid>
          </Grid>
          <CartTotalPrice />
        </Box>
      </Container>
    </Box>
  );
}
