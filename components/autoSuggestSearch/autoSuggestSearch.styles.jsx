import { makeStyles } from '@material-ui/core';

export const useAutoSuggestSearch = makeStyles((theme) => ({
  searchInput: {
    marginTop: "2vh",
    display: 'flex',
    alignItems: 'center',
    width: 800,
    [theme.breakpoints.down("898")]: {
      width: 600,
    },
    [theme.breakpoints.down("648")]: {
      width: 400,
    },
    [theme.breakpoints.down("450")]: {
      width: '100%',
    },
  }, 
  searchFiltered:{
    padding: "2px",
    zIndex: 5,
    minHeight: '0px',
    maxHeight: '90px',
    overflow: 'auto'
  },
  Link:{
    flexDirection: 'column',
  } 
}));
