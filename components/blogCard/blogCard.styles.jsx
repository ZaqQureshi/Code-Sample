import { makeStyles } from '@material-ui/core';

export const useStylesBlogCard = makeStyles((theme) => ({
  cardRoot: {
    // background: theme.palette.background.paper,
    background: '#fafafa',
    // boxShadow: theme.shadows[3],
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius * 2,
  },
  title: {
    fontSize: '1.3rem',
    color: theme.palette.text.primary,
    cursor: 'pointer',
    [theme.breakpoints.down('1000')]: {
      fontSize: '0.8rem',
    },
  },
  flexContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: '0.5rem 0',
  },
  categories: {
    display: 'flex',
    flex: 1,
    gap: '1.5rem',
    flexWrap: 'wrap',
    [theme.breakpoints.down('1000')]: {
      gap: '0.5rem',
    },
  },
  category: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    [theme.breakpoints.down('800')]: {
      fontSize: '0.7rem',
      width: '100%',
    },
  },
  duration: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: '0.8rem',
    marginBottom: "0rem"
  },
  readTime:{
    display: "flex",
    justifyContent: "space-between",
    p: 1,
    m: 1
    },
  subfield: {
    fontSize: '1rem',
  },
  previewimage: {
    width: '100%',
    objectFit: 'cover',
    maxHeight: '15rem',
    borderRadius: theme.shape.borderRadius * 2,
    marginBottom: '0.8rem',
    [theme.breakpoints.down('800')]: {
      maxHeight: '10rem',
    },
  },
}));
