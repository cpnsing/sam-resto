/* eslint-disable no-use-before-define */
import React, { useState, useContext } from "react";
import { matchPath } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import {
  Box,
  List,
  makeStyles,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
import { AuthContext } from "src/context/Auth";
import { Dialog } from "@material-ui/core";
import NavItem from "src/layouts/DashboardLayout/NavBar/NavItem";
import { useHistory } from "react-router-dom";
import { FaWallet, FaSignOutAlt } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
const sections = [
  {
    title: "Wallet",
    href: "/my-wallet",
    icon: FaWallet,
  },
  {
    title: "Logout",
    href: "/dashboard",
    icon: FaSignOutAlt,
  },
];

function renderNavItems({ items, pathname, depth = 0 }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, pathname, depth }),
        []
      )}
    </List>
  );
}

function reduceChildRoutes({ acc, pathname, item, depth }) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    });

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        info={item.info}
        key={key}
        title={item.title}
      />
    );
  }

  return acc;
}

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    position: "absolute",
    right: 0,
    top: 30,
    width: 280,
    // background: theme.palette.,
  },
  avatar: {
    cursor: "pointer",
    width: 40,
    height: 40,
    marginLeft: "7px",
    padding: "8px",
    background: "rgba(255,255,255,0.2)",
    [theme.breakpoints.down("xs")]: {
      width: 30,
      height: 30,
    },
    "&:hover": {
      transition: "0.4s ease-in-out",
      background: "#fff",
      color: "#000",
      "& svg": {
        color: "#000",
      },
    },

    "& svg": {
      color: "#fff",
    },
  },
  avatarBig: {
    cursor: "pointer",
    width: 150,
    height: 150,
  },
  socialIcon: {
    cursor: "pointer",
    marginRight: 5,
  },
  profileBox: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    "& span": {
      color: "#fff",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    "& .icon": {
      position: "absolute",
      top: "-3px",
      right: "-4px",
      [theme.breakpoints.down("xs")]: {
        width: 20,
      },
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [rightBar, setRightBar] = useState(false);
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { userData } = auth;
  const [open, setOpen] = useState(false);
  const confirmationHandler = () => {
    history.push("/login");
  };

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Box>
          <Typography variant="h6" align="left">
            Ashutosh jha
          </Typography>
          <Typography variant="caption" align="left">
            ashutoshjha@gmail.com
          </Typography>
        </Box>
        <div style={{ borderBottom: "1px solid white", height: 10 }}></div>
        <Box py={2}>
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <Button
                fullWidth
                style={{ justifyContent: "left", textTransform: "capitalize" }}
                key={i}
                onClick={() => {
                  section.title === "Logout"
                    ? setOpen(true)
                    : history.push(section.href);
                }}
              >
                <Icon style={{ color: "#00e0b0" }} /> &nbsp;&nbsp;
                {section.title}
              </Button>
            );
          })}
        </Box>
      </PerfectScrollbar>
    </Box>
  );

  return (
    <>
      <Box
        className={classes.profileBox}
        onClick={() => history.push("/profile")}
      >
        <Typography variant="body2" component="span">
          {userData && userData?.name ? userData?.name : userData?.userName}
        </Typography>

        <Avatar className={classes.avatar}>
          <BiUser />
        </Avatar>
      </Box>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

export default NavBar;
