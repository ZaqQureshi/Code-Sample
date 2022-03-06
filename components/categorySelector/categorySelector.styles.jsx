import { makeStyles } from '@material-ui/core';

export const useStylesCategorySelector = makeStyles((theme) => ({
  categoryContainer: {
    display: 'flex',
    gap: '6rem',
    justifyContent: 'center',
    background: theme.palette.background.default,
    [theme.breakpoints.down('800')]: {
      gap: '2rem',
    },
    padding: '0.5rem',
  },
  category: {
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    transition: 'all 0.2s ease',

    '&:hover': {
      transform: 'scale(1.02)',
      color: theme.palette.text.primary,
    },
    '&:active': {
      transform: 'scale(1)',
      color: theme.palette.text.primary,
    },
  },
  highlighted: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    background: theme.palette.background.paper,
    boxShadow: '0 2px 5px',
    padding: '0 10px',
    borderRadius: '5px',
    '&:hover': {
      transform: 'scale(1.02)',
      color: theme.palette.primary.main,
    },
    '&:active': {
      transform: 'scale(1)',
    },
  },
}));
