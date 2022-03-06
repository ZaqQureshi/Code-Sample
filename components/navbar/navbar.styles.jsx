import { makeStyles } from '@material-ui/core';
export const useStylesNavbar = makeStyles((theme) => ({
  appBar: {
    width: "100%",
    position: "fixed",
    backgroundColor: "transparent",
    fontFamily: "Gilroy, sans-serif",
    fontWeight: "bold",
    transition: "all 0.1s ease",
    [theme.breakpoints.down("1050")]: {
      display: "none",
    },
  },
  appBarSolidNav: {
    width: "100%",
    position: "fixed",
    backgroundColor: "white",
    fontFamily: "Gilroy, sans-serif",
    fontWeight: "bold",
    transition: "all 0.1s ease",
    [theme.breakpoints.down("1050")]: {
      display: "none",
    },
  },
  appBarScroll: {
    width: "100%",
    position: "fixed",
    backgroundColor: "white",
    fontFamily: "Gilroy, sans-serif",
    transition: "all 0.1s ease",
    [theme.breakpoints.down("1050")]: {
      display: "none",
    },
  },
  menuButton: {
    marginRight: "auto",
    marginLeft: "1rem",
  },
  appBarMobile: {
    display: "none",
    [theme.breakpoints.down("1050")]: {
      transition: "all 0.1s ease",
      display: "flex",
      backgroundColor: "transparent",
      flexDirection: "row",
    },
  },
  appBarMobileSolidNav: {
    display: "none",
    [theme.breakpoints.down("1050")]: {
      transition: "all 0.1s ease",
      display: "flex",
      backgroundColor: "white",
      flexDirection: "row",
    },
  },

  appBarMobileScroll: {
    display: "none",
    [theme.breakpoints.down("1050")]: {
      transition: "all 0.1s ease",
      display: "flex",
      backgroundColor: "white",
      flexDirection: "row",
    },
  },

  appBarMobileInner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "& div": {
      marginLeft: "1rem",
      "& img": {
        width: "10rem",
      },
    },
  },

  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "9rem",
    paddingLeft: "9rem",
    [theme.breakpoints.down("1300")]: {
      paddingRight: "2rem",
      paddingLeft: "2rem",
    },
  },
  image: {
    width: "15rem",
    marginTop: "0.5rem",
    cursor: "pointer",
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    marginRight: "1.3rem",
    marginLeft: "1.3rem",
    fontSize: "1.1rem",
    color: "#050202",
    fontWeight: 500,
    cursor: "pointer",
    [theme.breakpoints.down("1135")]: {
      marginRight: "1rem",
      marginLeft: "1rem",
      fontSize: "1rem",
    },
  },
  dropdownLink: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "0.2rem",
    marginRight: "1.3rem",
    marginLeft: "1.1rem",
    fontSize: "1.1rem",
    color: "#050202",
    fontWeight: 500,
    zIndex: 9999,
    position: "relative",
    height: "4rem",
    [theme.breakpoints.down("1135")]: {
      marginRight: "1rem",
      marginLeft: "1rem",
      fontSize: "1rem",
    },
  },
  dropdownItem: {
    fontWeight: "bold",
    display: "flex",
    gap: "1rem",
  },
  dropdownLinkIcon: {
    color: "#050202",
    fontSize: "1.2rem",
  },
  dropdownRoot: {
    width: "22.5rem",
    position: "absolute",
    top: "2.5rem",
    marginLeft: "-10rem",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
    transition: "all 0.25s ease-in-out",
    padding: "1rem",
    borderRadius: "0.5rem",
    display: "flex",
    gap: "0.5rem",
    flexDirection: "column",
    background: "white",
  },
  hr: {
    width: "16.5rem",
    background: "#d3d3d3",
    height: "0.15rem",
    marginTop: "0.15rem",
    marginBottom: "0.15rem",
  },
  moveDownDropdown: {
    position: "absolute",
    marginTop: "-2rem",
    zIndex: 9999,
    width: "9rem",
    left: "-5rem",
  },
  linkTag: {
    color: "inherit",
    textDecoration: "none",
    "& > span": {
      fontWeight: 900,
    },
  },
  signUp: {
    background: "#E8219C",
    "&:hover": {
      background: "#E8219C",
    },
    padding: "0.75rem",
    paddingRight: "0.9rem",
    paddingLeft: "0.9rem",
    color: "white",
    fontWeight: "bold",
    fontFamily: "Gilroy, sans-serif",
    width: "6rem",
  },
  login: {
    "&:hover": {
      background: "#249FFB",
    },
    background: "#249FFB",
    padding: "0.75rem",
    paddingRight: "0.9rem",
    paddingLeft: "0.9rem",
    color: "white",
    fontWeight: "bold",
    fontFamily: "Gilroy, sans-serif",
    width: "8rem",
  },
  buttonContainer: {
    marginRight: "0.5rem",
    marginLeft: "0.5rem",
  },
  links: {
    marginRight: "0.75rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  drawer: {
    flexShrink: 0,
    width: "240px",
  },
  drawerPaper: {
    backgroundColor: "#E3F3FF",
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
    color: "#08184A",
  },
  sideBarImage: {
    marginRight: "1rem",
    marginBottom: "1rem",
    marginLeft: "0.5rem",
  },
  sideBarImageInner: {
    width: "13rem",
  },
  svgIcon: {
    color: "#08184A",
  },
  sideBarText: {
    color: "#08184A",
    fontFamily: "Gilroy, sans-serif",
    fontWeight: "bold",
    fontSize: "0.95rem",
  },
  divider: {
    backgroundColor: "#D6EBFA",
  },
  accountButton: {
    marginLeft: "-0.75rem",
  },
  accountIcon: {
    color: "#08184A",
    width: "2.5rem",
    height: "2.5rem",
  },
  rootLink: {
    fontWeight: 600,
  },
  logoLink: {
    cursor: "pointer",
    "&:hover": {
      cursor: "pointer",
    },
  },
  popoverButton: {
    fontFamily: "Gilroy, sans-serif",
    width: "100%",
    textAlign: "left",
    justifyContent: "flex-start",
    textTransform: "none",
    fontWeight: "bold",
  },
  popoverInner: {
    padding: "0.7rem",
    borderRadius: "0.5rem",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  displayNone: {
    display: "none",
  },
}));

