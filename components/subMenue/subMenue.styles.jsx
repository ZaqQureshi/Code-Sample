import { makeStyles } from '@material-ui/core';
export const useStylesSubMenue = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginTop: "9rem",
    background: "#249FFB"
  },
  boxArea: {
    marginRight: "25%",
    marginLeft: "25%",
    height: "20vh",
    padding: "2rem",
    [theme.breakpoints.down("1500")]: {
      fontSize: "0.9rem",
      marginRight: "20%",
      marginLeft: "20%",
    },
    [theme.breakpoints.down("1154")]: {
      marginRight: "5%",
      marginLeft: "5%",
    },
    [theme.breakpoints.down("898")]: {
      marginRight: "1%",
      marginLeft: "1%",
    },
  },
  searchLogo: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "1.8rem",
    [theme.breakpoints.down("1500")]: {
      fontSize: "1.2rem",
    },
  },
  menue: {
    display: "flex",
    alignItems: "center",
    background: "#f3f3f3",
  },
  menueArea:{
    marginRight: "25%",
    marginLeft: "25%",
    height: "6vh",
    padding: "1rem",
    [theme.breakpoints.down("1769")]: {
      marginRight: "0.7rem",
      marginLeft: "0.7rem",
      marginRight: "25%",
      marginLeft: "25%",
    },
    [theme.breakpoints.down("1615")]: {
      marginRight: "0.7rem",
      marginLeft: "0.7rem",
      marginRight: "20%",
      marginLeft: "20%",
    },
    [theme.breakpoints.down("1345")]: {
      marginRight: "0.6rem",
      marginLeft: "0.6rem",
      marginRight: "15%",
      marginLeft: "15%",
    },
    [theme.breakpoints.down("1154")]: {
      marginRight: "0.5rem",
      marginLeft: "0.5rem",
      marginRight: "5%",
      marginLeft: "5%",
    },
    [theme.breakpoints.down("898")]: {
      marginRight: "0.3rem",
      marginLeft: "0.3rem",
    },
    [theme.breakpoints.down("818")]: {
      marginRight: "0.2rem",
      marginLeft: "0.2rem",
      height: "8vh",
    }
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    marginRight: "1rem",
    marginLeft: "1rem",
    fontSize: "0.8rem",
    color: "#050202",
    fontWeight: 700,
    cursor: "pointer",
    [theme.breakpoints.down("1769")]: {
      marginRight: "0.6rem",
      marginLeft: "0.6rem",
    },
    [theme.breakpoints.down("600")]: {
      marginRight: "0.4rem",
      marginLeft: "0.4rem",
      fontSize: '0.6rem'
    },
  },
  links: {
    marginRight: "0.75rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  linkTag: {
    color: "inherit",
    textDecoration: "none",
    "& > span": {
      fontWeight: 900,
    },
  },
}));

