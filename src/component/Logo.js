import { makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "src/context/Auth";
const useStyles = makeStyles((theme) => ({
  img: {
    height: "45px !important",
    width: "45px !important",
    objectFit: "cover !important",
    borderRadius: "50px !important",
    padding: "0px !important",
  },
}));
const Logo = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const auth = useContext(AuthContext);

  return (
    <>
      {auth?.userData?.userType === "Admin" ||
      auth?.userData?.userType === "Subadmin" ? (
        <img
          className={classes.img}
          onClick={() => history.push("/")}
          src="/images/resto/logo.png"
          alt="Logo"
          style={{ cursor: "pointer" }}
          {...props}
        />
      ) : (
        <img
          onClick={() => history.push("/")}
          src="/images/resto/logo.png"
          alt="Logo"
          style={{ cursor: "pointer" }}
          {...props}
        />
      )}
    </>
  );
};

export default Logo;
