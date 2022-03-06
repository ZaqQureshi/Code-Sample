import React from "react";
import { useStylesSubMenue } from './subMenue.styles';
import Divider from '@mui/material/Divider';
import Link from "next/link";
import AutoSuggestSearch from '../autoSuggestSearch/autoSuggestSearch';
const SubMenue = () => {
  const classes = useStylesSubMenue();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.boxArea}>
          {/* <div className={classes.searchArea}> */}
            <AutoSuggestSearch/>
          {/* </div> */}
        </div>
      </div>

      <div className={classes.menue}>
        <div className={classes.menueArea}>
          <div className={classes.linkContainer}>
            <div className={classes.links}>
              <Divider orientation="vertical" flexItem />
              <div className={classes.link}>
                <Link href={`/type/Real_estate_news`} className={classes.linkTag}>
                  <span className={classes.rootLink}>Real-estate News</span>
                </Link>
              </div>
              <Divider orientation="vertical" flexItem />
              <div className={classes.link}>
                <Link href={`/type/Knowledge_center`} className={classes.linkTag}>
                  <span className={classes.rootLink}>Knowledge Centre</span>
                </Link>
              </div>
              <Divider orientation="vertical" flexItem />
              <div className={classes.link}>
                <Link href={`/type/Selling`} className={classes.linkTag}>
                  <span className={classes.rootLink}>Selling</span>
                </Link>
              </div>
              <Divider orientation="vertical" flexItem />
              <div className={classes.link}>
                <Link href={`/type/Buying`} className={classes.linkTag}>
                  <span className={classes.rootLink}>Buying</span>
                </Link>
              </div>
              <Divider orientation="vertical" flexItem />
              <div className={classes.link}>
                <Link href={`/type/Renting`} className={classes.linkTag}>
                  <span className={classes.rootLink}>Renting</span>
                </Link>
              </div>
              <Divider orientation="vertical" flexItem />
              <div className={classes.link}>
                <Link href={`/type/Manage_your_rental`} className={classes.linkTag}>
                  <span className={classes.rootLink}>Manage Rental</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SubMenue;
