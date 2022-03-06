import { makeStyles } from '@material-ui/core';

export const useStylesFooter = makeStyles((theme) => ({
    root: {
      overflow: "hidden",
      width: "100%",
      background: "#DAEFFF",
      clipPath: "polygon(0 7%, 100% 0, 100% 100%, 0 100%)",
      paddingTop: "7.5rem",
      fontFamily: "Gilroy, sans-serif",
      marginTop: "5rem",
      position: "relative",
      overflow: "hidden",
      [theme.breakpoints.down("1164")]: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      },
    },
    button: {
      background: "#249FFB",
      color: "white",
      textTransform: "none",
      margin: "5px",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bold",
      padding: "1rem",
      marginTop: "0.5rem",
      "&:hover": {
        background: "#249FFB",
      },
    },
    terms: {
      fontWeight: "bold",
      textDecoration: "underline",
      cursor: "pointer",
    },
    image: {
      padding: 0,
      margin: 0,
      // marginBottom: "-1rem",
      [theme.breakpoints.down("900")]: {
        transform: "translateY(-5rem)",
      },
    },
    flex: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0 9rem",
      // alignItems: 'flex-end',
      [theme.breakpoints.down("1300")]: {
        paddingRight: "2rem",
        paddingLeft: "2rem",
      },
      [theme.breakpoints.down("900")]: {
        flexDirection: "column",
      },
      // [theme.breakpoints.down("1164")]: {
      //   display: "grid",
      //   gridTemplateColumns: "0.95fr 0.55fr",
      //   gridTemplateRows: "1fr 1fr",
      // },
      // [theme.breakpoints.down("675")]: {
      //   display: "grid",
      //   gridTemplateColumns: "1fr",
      //   gridTemplateRows: "1fr 0.9fr 0.4fr 0.4fr",
      // },
    },
    logo: {
      width: "15rem",
      margin: 0,
    },
    companyName: {
      fontWeight: "bold",
    },
    companyDescription: {
      maxWidth: "23rem",
    },
    linksContainer: {},
    linksContainerOne: {
      marginTop: "3rem",
      marginLeft: "1.5rem",
      marginRight: "1.5rem",
      "& div": {
        paddingBottom: "1rem",
      },
      [theme.breakpoints.down("1280")]: {
        display: "none",
      },
    },
    smallLink: {
      marginLeft: "1.5rem",
      marginRight: "1.5rem",
      marginTop: "1rem",
      "& div": {
        paddingBottom: "1rem",
      },
      [theme.breakpoints.up("770")]: {
        display: "none",
      },
    },
    mediumLink: {
      marginLeft: "1.5rem",
      marginRight: "1.5rem",
      marginTop: "0.5rem",
      "& div": {
        paddingBottom: "1rem",
      },
      [theme.breakpoints.up("1280")]: {
        display: "none",
      },
      [theme.breakpoints.down("960")]: {
        display: "none",
      },
    },
    linkTitle: {
      fontWeight: "bold",
      fontSize: "1.3rem",
      marginTop: "1rem",
      [theme.breakpoints.down("1280")]: {
        fontSize: "1.1rem",
      },
      [theme.breakpoints.up("960")]: {
        fontSize: "1rem",
      },
    },
  
    linkTitleTop: {
      fontWeight: "bold",
      fontSize: "1.3rem",
      marginBottom: "-2rem",
      [theme.breakpoints.down("1280")]: {
        fontSize: "1.1rem",
      },
      [theme.breakpoints.up("960")]: {
        fontSize: "1rem",
      },
    },
    googlePlay: {
      width: "9.75rem",
      margin: 0,
      marginTop: "-0.55rem",
    },
    flexBoxBadges: {
      display: "flex",
      flexDirection: "row",
    },
    contact: {
      marginTop: "-1.5rem",
    },
    link: {
      color: "#4e4f52",
      fontWeight: "bold",
      fontSize: "1.3rem",
      [theme.breakpoints.down("770")]: {
        padding: "0.3rem",
        marginTop: "0.2rem",
      },
    },
    hr: {
      color: "white",
      width: "calc(100% - 18rem)",
      marginTop: "1.5rem",
      backgroundColor: "white",
      height: "0.15rem",
      borderTop: "1px solid white",
      borderLeft: "1px solid white",
      marginBottom: "1.5rem",
      [theme.breakpoints.down("1300")]: {
        width: "calc(100% - 4rem)",
      },
      // [theme.breakpoints.down("1164")]: {},
      // [theme.breakpoints.down("770")]: {
      //   marginTop: "-10rem",
      // },
    },
    footer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down("675")]: {
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "left",
      },
    },
    socialContainer: {
      display: "flex",
      gap: "2rem",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
      justifyContent: "space-between",
      [theme.breakpoints.down("770")]: {
        flexDirection: "row",
        width: "100%",
  
        "& > div": {
          flex: 1,
        },
      },
    },
    footerContainer: {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "0 9rem",
      [theme.breakpoints.down("1300")]: {
        paddingRight: "2rem",
        paddingLeft: "2rem",
      },
    },
    social: {},
    rights: {
      fontWeight: "bold",
      marginLeft: "2rem",
      [theme.breakpoints.down("1164")]: {
        marginRight: "2rem",
      },
      [theme.breakpoints.down("675")]: {
        margin: 0,
      },
    },
    madeWithHeart: {
      fontWeight: "bold",
      marginRight: "2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& img": {
        height: "1rem",
        marginLeft: "0.5rem",
      },
      [theme.breakpoints.down("1164")]: {
        marginLeft: "2rem",
      },
      [theme.breakpoints.down("675")]: {
        margin: 0,
      },
    },
    heartIcon: {
      fontSize: "1.1rem",
      marginLeft: "0.3rem",
      marginRight: "0.3rem",
    },
    quickLinks: {},
    termsLinks: {
      display: "grid",
      marginTop: "25px",
      gap: "2rem",
      gridTemplateColumns: "1fr 1fr",
      [theme.breakpoints.down("1300")]: {
        gap: "1rem",
      },
    },
    downloadNowContainer: {
      display: "flex",
      justifyContent: "flex-end",
      textAlign: "center",
      marginTop: "2rem",
      paddingRight: "2rem",
      height: "100%",
      paddingBottom: "1.5rem",
      [theme.breakpoints.down("768")]: {
        paddingRight: "0.5rem",
      },
    },
    companyInfoContainer: {
      marginLeft: "1.5rem",
      marginRight: "1.5rem",
      [theme.breakpoints.down("900")]: {
        margin: 0,
      },
    },
    email: {
      color: "#4e4f52",
      display: "block",
    },
    phone: {
      color: "#4e4f52",
      display: "block",
      width: "max-content",
    },
  }));