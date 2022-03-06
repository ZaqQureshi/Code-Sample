import React from "react";
import Link from "next/link";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Box from "@material-ui/core/Box";
import MailIcon from "@material-ui/icons/Mail";
import { useStylesFooter } from './footer.styles';

const Footer = () => {
  const classes = useStylesFooter();
  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <div className={classes.companyInfoContainer}>
          <img src="/logo.png" className={classes.logo} />
          <div className={classes.companyDescription}>
            <span className={classes.companyName}>myHomely </span>
            is not offering any home for sale or rent and not representing any
            user on myHomely. All the properties are listed directly by the users and
            information about the properties are not guaranteed to be accurate.
            Visit{" "}
            <Link href="https://myhomely.ca/terms-of-use">
              <span className={classes.terms}>Terms of Use</span>
            </Link>{" "}
            for more details.
          </div>
          <div className={classes.termsLinks}>
            <div className={classes.linkTitleTop}>
              <Link href="https://myhomely.ca/terms-of-use">Terms of Use</Link>
            </div>
            <div className={classes.linkTitleTop}>
              <Link href="https://myhomely.ca/covid-19-notice">Covid 19 Notice</Link>
            </div>
            <div className={classes.linkTitle}>
              <Link href="https://myhomely.ca/copyright-policy">Copyright Policy</Link>
            </div>
            <div className={classes.linkTitle}>
              <Link href="https://myhomely.ca/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <Box flexGrow={1}>
          <div className={classes.downloadNowContainer}>
            <div className={classes.socialContainer}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <a href="https://www.facebook.com/My-Homely-Canada-103503542005820">
                  <img
                    src="/facebook.svg"
                    alt="facebook"
                    className={classes.social}
                  />
                </a>
                <a href="https://twitter.com/myHomelyCanada">
                  <img
                    src="/twitter.svg"
                    alt="twitter"
                    className={classes.social}
                  />
                </a>
                <a href="https://instagram.com/myhomelycanada">
                  <img
                    src="/instagram.svg"
                    alt="instagram"
                    className={classes.social}
                  />
                </a>
              </div>
              <div
                style={{ display: "flex", flexFlow: "row wrap", gap: "1rem" }}
              >
                <a
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                  href="mailto:contact@myhomely.ca"
                  className={classes.email}
                >
                  <MailIcon /> contact@myhomely.ca
                </a>
              </div>
            </div>
          </div>
        </Box>
      </div>

      <hr className={classes.hr} />
      <div className={classes.footerContainer}>
        <div className={classes.footer}>
          <div className={classes.rights}>
            &copy; {new Date().getFullYear()} myHomely. All Rights Reserved.
          </div>
          <div className={classes.madeWithHeart}>
            Proudly made with <FavoriteIcon className={classes.heartIcon} /> in
            Canada{" "}
            <span style={{ fontSize: "1.5rem" }}>
              {" "}
              <img src="/canada.svg" alt="canada flag" />
            </span>
          </div>
        </div>
      </div>

      <img src="/footer.svg" alt="footer" className={classes.image} />
    </div>
  );
}
export default Footer;