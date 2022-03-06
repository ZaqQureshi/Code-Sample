import { Container, makeStyles } from '@material-ui/core';
import { NextSeo } from 'next-seo';
import Masonry from 'react-masonry-css';
import BlogCard from '../components/blogCard/blogCards';
import markdownToHtml from '../lib/remark/markdownToHtml';
import { client } from '../lib/graphql/client';
import {
  HOME_FEATURED_ARTICLE_LIMIT,
  HOME_REAL_ESTATE_NEWS_LIMIT,
  HOME_SELLING_YOUR_HOME_LIMIT,
  HOME_BUYING_HOME_LIMIT,
  HOME_RENTING_HOME_LIMIT,
  HOME_MANAGE_YOUR_RENTAL_LIMIT,
  HOME_KNOWLEDGE_CENTER_LIMIT
} from '../lib/graphql/query';
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingLeft: '5rem',
    paddingRight: '5rem',
    marginTop: '5rem',
    [theme.breakpoints.down('1000')]: {
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
    [theme.breakpoints.down('400')]: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
  },
  mainType: {
    display: 'flex',
    fontSize: '2rem',
    fontWeight: 'bold',
    padding: '0.5rem 0rem 0rem 0.5rem',
    color: '#249FFB'
  },
  horizantal: {
    marginBottom: "1rem",
    border: "1px solid pink"
  },
  cardContainer: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  maintainance: {
    fontSize: theme.typography.h2.fontSize,
    width: '100%',
    '& > div': {
      margin: 'auto',
      width: 'fit-content',
      lineHeight: '40vh',
    },
  },
  dataImg: {
    display: "flex",
    justifyContent: 'center',
  },
  dataNot: {
    width: "30%",
    marginTop: "5rem"
  }
}));

export default function Home(props) {
  const classes = useStyles();
  const { featured, realEstate, sellHome, buyingHome, rentingHome, manageRentHome, knowledgeCenter } = props;
  const breakPoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  if (featured.length === 0 && realEstate.length === 0 && sellHome.length === 0 && buyingHome.length === 0 && rentingHome.length === 0 && manageRentHome.length === 0 && manageRentHome.length === 0 && knowledgeCenter.length === 0) {
    return (
      <div className={classes.dataImg}>
        <img
          className={classes.dataNot}
          src="/dataNotFound.svg"
          alt="logo"
        />
      </div>
    );
  }

  return (
    <>
      <NextSeo
        title="myhomely"
        description="detail of my myhomely.ca myhomely home page"
      />
      <div className={classes.root}>
        <Container>
          {featured ? <>
            <div className={classes.mainType}>Featured Articles</div>
            <hr className={classes.horizantal} />
            <Masonry
              breakpointCols={breakPoints}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {featured.map((blog) => (
                <BlogCard blog={blog} key={blog.id} />
              ))}
            </Masonry>
          </> : <></>
          }


          {realEstate[0].blogs.length ? <>
            <div className={classes.mainType}>Real Estate News</div>
            <hr className={classes.horizantal} />
            <Masonry
              breakpointCols={breakPoints}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {realEstate[0].blogs.map((blog) => (
                <BlogCard blog={blog} key={blog.id} />
              ))}
            </Masonry>
          </> : <></>
          }

          {
            sellHome[0].blogs.length ? <>
              <div className={classes.mainType}>Selling Your Home</div>
              <hr className={classes.horizantal} />
              <Masonry
                breakpointCols={breakPoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {sellHome[0].blogs.map((blog) => (
                  <BlogCard blog={blog} key={blog.id} />
                ))}
              </Masonry>
            </> : <></>
          }

          {
            buyingHome ? <>
              <div className={classes.mainType}>Buying a Home</div>
              <hr className={classes.horizantal} />
              <Masonry
                breakpointCols={breakPoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {buyingHome[0].blogs.map((blog) => (
                  <BlogCard blog={blog} key={blog.id} />
                ))}
              </Masonry>
            </> : <></>
          }

          {
            rentingHome[0].blogs.length ? <>
              <div className={classes.mainType}>Renting a Home</div>
              <hr className={classes.horizantal} />
              <Masonry
                breakpointCols={breakPoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {rentingHome[0].blogs.map((blog) => (
                  <BlogCard blog={blog} key={blog.id} />
                ))}
              </Masonry>
            </> : <></>
          }

          {
            manageRentHome[0].blogs.length ? <>
              <div className={classes.mainType}>Mange Your Rental Home</div>
              <hr className={classes.horizantal} />
              <Masonry
                breakpointCols={breakPoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {manageRentHome[0].blogs.map((blog) => (
                  <BlogCard blog={blog} key={blog.id} />
                ))}
              </Masonry>
            </> : <></>
          }

          {
            knowledgeCenter[0].blogs.length ? <>
              <div className={classes.mainType}>Knowledge Centre</div>
              <hr className={classes.horizantal} />
              <Masonry
                breakpointCols={breakPoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {knowledgeCenter[0].blogs.map((blog) => (
                  <BlogCard blog={blog} key={blog.id} />
                ))}
              </Masonry>
            </> : <></>
          }

        </Container>
      </div>
    </>
  );
}

// helper functions

export const getServerSideProps = async () => {
  try {
    const {
      data: { blogs },
      error,
    } = await client.query({
      query: HOME_FEATURED_ARTICLE_LIMIT
    });
    const trimmedFeatured = blogs.map((blog) => {
      let wordCount = blog.body.trim().split(/\s+/g).length;
      let minutesToRead = (wordCount / 100 + 1).toFixed(0);
      return {
        ...blog,
        body: blog.body.substring(0, 100 + ((Math.random() * 1000) % 100)),
        minutesToRead,
      };
    });

    const realEstate = await client.query({ query: HOME_REAL_ESTATE_NEWS_LIMIT });
    const trimmedRealEstate = realEstate.data.categories.map((blog) => {
      // const wordCount = blog.body.trim().split(/\s+/g).length;
      // const minutesToRead = (wordCount / 100 + 1).toFixed(0);
      return {
        ...blog,
        // body: blog.body.substring(0, 100 + ((Math.random() * 1000) % 100)),
        // minutesToRead,
      };
    });

    const sellHome = await client.query({ query: HOME_SELLING_YOUR_HOME_LIMIT });

    const trimmedSellHome = sellHome.data.categories.map((blog) => {
      // const wordCount = blog.body.trim().split(/\s+/g).length;
      // const minutesToRead = (wordCount / 100 + 1).toFixed(0);
      return {
        ...blog,
        // body: blog.body.substring(0, 100 + ((Math.random() * 1000) % 100)),
        // minutesToRead,
      };
    });

    const buyingHome = await client.query({ query: HOME_BUYING_HOME_LIMIT });

    const trimmedBuyingHome = buyingHome.data.categories.map((blog) => {
      // const wordCount = blog.body.trim().split(/\s+/g).length;
      // const minutesToRead = (wordCount / 100 + 1).toFixed(0);
      return {
        ...blog,
        // body: blog.body.substring(0, 100 + ((Math.random() * 1000) % 100)),
        // minutesToRead,
      };
    });

    const rentingHome = await client.query({ query: HOME_RENTING_HOME_LIMIT });

    const trimmedRentingHome = rentingHome.data.categories.map((blog) => {
      // const wordCount = blog.body.trim().split(/\s+/g).length;
      // const minutesToRead = (wordCount / 100 + 1).toFixed(0);
      return {
        ...blog,
        // body: blog.body.substring(0, 100 + ((Math.random() * 1000) % 100)),
        // minutesToRead,
      };
    });

    const manageRentHome = await client.query({ query: HOME_MANAGE_YOUR_RENTAL_LIMIT });

    const trimmedManageRentHome = manageRentHome.data.categories.map((blog) => {
      // const wordCount = blog.body.trim().split(/\s+/g).length;
      // const minutesToRead = (wordCount / 100 + 1).toFixed(0);
      return {
        ...blog,
        // body: blog.body.substring(0, 100 + ((Math.random() * 1000) % 100)),
        // minutesToRead,
      };
    });

    const knowledgeCenter = await client.query({ query: HOME_KNOWLEDGE_CENTER_LIMIT });

    const trimmedKnowledgeCenter = knowledgeCenter.data.categories.map((blog) => {
      // const wordCount = blog.body.trim().split(/\s+/g).length;
      // const minutesToRead = (wordCount / 100 + 1).toFixed(0);
      return {
        ...blog,
        // body: blog.body.substring(0, 100 + ((Math.random() * 1000) % 100)),
        // minutesToRead,
      };
    });

    return {
      props: { featured: trimmedFeatured, realEstate: trimmedRealEstate, sellHome: trimmedSellHome, buyingHome: trimmedBuyingHome, rentingHome: trimmedRentingHome, manageRentHome: trimmedManageRentHome, knowledgeCenter: trimmedKnowledgeCenter },
    };
  } catch (error) {
    return {
      props: {
        featured: [],
        realEstate: [],
        sellHome: [],
        buyingHome: [],
        rentingHome: [],
        manageRentHome: [],
        knowledgeCenter: []
      },
    };
  }
};
