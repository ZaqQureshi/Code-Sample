import { makeStyles } from '@material-ui/core';
export const useStylesSideMenue = makeStyles((theme) => ({
  paperBox: {
    padding: '1rem',
    background: 'white',
    position: '-webkit-sticky',
    position: 'sticky',
  },
  image: {
    width: "13rem",
    marginTop: "0.5rem",
    cursor: "pointer",
    [theme.breakpoints.down("1300")]: {
      width: "9rem",
      marginTop: "0.4rem",  
    },
  },
  link: {
    fontSize: '1rem',
    fontWeight: 'bold',
    padding: '3px',
  },
  divider:{
    marginBottom: '1rem'
  }
}));

