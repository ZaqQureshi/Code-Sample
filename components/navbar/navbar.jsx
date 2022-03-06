import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Link from "next/link";

import { useTheme } from "@material-ui/core/styles";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import WorkIcon from "@material-ui/icons/Work";

import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Divider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { useStylesNavbar } from './navbar.styles';

const NavBar = ({ solidNav }) => {
  const classes = useStylesNavbar();
  const [scrollClass, setScrollClass] = useState(classes.appBar);
  const [scrollMobileClass, setScrollMobileClass] = useState(
    classes.appBarMobile
  );
  const [shadow, setShadow] = useState(0);


  const [mobileOpen, setMobileOpen] = useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const itemsList = [
    {
      text: "Home",
      icon: <HomeRoundedIcon className={classes.svgIcon} />,
      link: "https://myhomely.ca",
      onClick: () => {
        handleDrawerToggle();
      },
    },
    {
      text: "Browse Homes",
      icon: <ShoppingCartIcon className={classes.svgIcon} />,
      link: "https://myhomely.ca/search",
      onClick: () => {
        handleDrawerToggle();
      },
    },
    {
      text: "List Property",
      link: "https://myhomely.ca/list-your-property-for-free-in-minutes",
      icon: <WorkIcon className={classes.svgIcon} />,
      onClick: () => {
        handleDrawerToggle();
      },
    },
    {
      text: "Free Estimate",
      link: "https://myhomely.ca/free-instant-home-estimate",
      icon: <MonetizationOnIcon className={classes.svgIcon} />,
      onClick: () => {
        handleDrawerToggle();
      },
    },
    {
      text: "FAQs",
      link: "/question",
      icon: <MonetizationOnIcon className={classes.svgIcon} />,
      onClick: () => {
        handleDrawerToggle();
      },
    },
  ];


  //Drawer
  const drawer = (
    <div>
      <List>
        <div className={classes.sideBarImage}>
          <img
            className={classes.sideBarImageInner}
            src="/logo.png"
            alt="logo"
          />
        </div>
        <Divider className={classes.divider} />

        {itemsList.map((item, index) => {
          const { text, icon, link, onClick } = item;
          return (
            <Link href={link} key={index}>
              <ListItem
                button
                key={text}
                onClick={onClick}
                className={classes.sideBarText}
              >
                {icon && (
                  <ListItemIcon className={classes.sideBarInactive}>
                    {icon}
                  </ListItemIcon>
                )}
                <ListItemText
                  disableTypography
                  primary={text}
                  className={classes.sideBarText}
                />
              </ListItem>
            </Link>
          );
        })}

        <Divider className={classes.divider} />
      </List>
    </div>
  );


  useEffect(() => {
    if (solidNav) {
      setScrollClass(classes.appBarSolidNav);
      setScrollMobileClass(classes.appBarMobileSolidNav);
    } else {
      document.addEventListener("scroll", () => {
        if (window.scrollY > 30) {
          setScrollClass(classes.appBarScroll);
          setScrollMobileClass(classes.appBarMobileScroll);
          setShadow(2);
        } else {
          setScrollClass(classes.appBar);
          setScrollMobileClass(classes.appBarMobile);
          setShadow(0);
        }
      });
    }
  }, []);

  const theme = useTheme();

  return (
    <React.Fragment>
      <AppBar position="fixed" className={scrollClass} elevation={shadow}>
        <div className={classes.root}>
          <div>
            <Link href="https://myhomely.ca" className={classes.logoLink}>
              <img src="/logo.png" alt="logo" className={classes.image} />
            </Link>
          </div>
          <div className={classes.linkContainer}>
            <div className={classes.links}>
              <div className={classes.link}>
                <Link href="https://myhomely.ca/search" className={classes.linkTag}>
                  <span className={classes.rootLink}>Browse Homes</span>
                </Link>
              </div>
              <div className={classes.link}>
                <Link href="https://myhomely.ca/list-your-property-for-free-in-minutes" className={classes.linkTag}>
                  <span className={classes.rootLink}>List Property</span>
                </Link>
              </div>

              <div className={classes.link}>
                <Link href="https://myhomely.ca/free-instant-home-estimate" className={classes.linkTag}>
                  <span className={classes.rootLink}>Free Estimate</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AppBar>

      <AppBar position="fixed" className={scrollMobileClass} elevation={shadow}>
        <div className={classes.appBarMobileInner}>
          <IconButton
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.shortLogoContainerAppbar}>
            <img
              className={classes.shortLogoContainerAppbarInner}
              src="/logo.png"
              alt="logo"
            />
          </div>
        </div>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden lgUp implementation="js">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon className={classes.sideBarInactive} />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </React.Fragment>
  );
}
export default NavBar;
