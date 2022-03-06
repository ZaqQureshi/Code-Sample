import React from "react";
import { useStylesSideMenue } from './sideMenue.styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Link from "next/link";
import Stack from "@mui/material/Stack";

const SideMenue = () => {
  const classes = useStylesSideMenue();
  return (
    <>
    <Stack spacing={2}>
          <Paper className={classes.paperBox}>
            <Link href='https://myhomely.ca'>
            <img
              src="/logo.png"
              alt="logo"
              className={classes.image}
            />
            </Link>
            <Link href='https://myhomely.ca/search'>
              <span className={classes.link}>Browse Home</span>
            </Link>
            <Divider sx={{ my: 0.5 }} className={classes.divider}/>
            <Link href='https://myhomely.ca/list-your-property-for-free-in-minutes' className={classes.link}>
              <span className={classes.link}>List Property</span>
            </Link>
            <Divider sx={{ my: 0.5 }} className={classes.divider}/>
            <Link href='https://myhomely.ca/free-instant-home-estimate' className={classes.link}>
              <span className={classes.link}>Free Estimate</span>
            </Link>
            <Divider sx={{ my: 0.5 }} className={classes.divider}/>
            <Link href='https://myhomely.ca/search' className={classes.link}>
              <span className={classes.link}>Buy Property</span>
            </Link>
            <Divider sx={{ my: 0.5 }} className={classes.divider}/>
            <Link href='https://myhomely.ca/search' className={classes.link}>
              <span className={classes.link}>Sell Property</span>
            </Link>
            <Divider sx={{ my: 0.5 }} className={classes.divider}/>
            <Link href='/question' className={classes.link}>
              <span className={classes.link}>FAQs</span>
            </Link>
            <Divider sx={{ my: 0.5 }} className={classes.divider}/>
          </Paper>
        </Stack>
    </>
  );
}
export default SideMenue;
