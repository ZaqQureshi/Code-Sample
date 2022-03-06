import { Button, makeStyles } from '@material-ui/core';
import { NextSeo } from 'next-seo';
import { Rating } from '@material-ui/lab';
import Link from 'next/link';
import { client } from '../../lib/graphql/client';
import { BLOG, BLOG_IDS } from '../../lib/graphql/query';
import markdownToHtml from '../../lib/remark/markdownToHtml';
import SideMenue from "../../components/sideMenue/sideMenue";
import Chip from '@material-ui/core/Chip';
import Box from "@mui/material/Box";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'around',
    paddingLeft: '10rem',
    paddingRight: '10rem',
    marginTop: '5rem',
    [theme.breakpoints.down('1000')]: {
      paddingLeft: '5rem',
      paddingRight: '5rem',
    },
    [theme.breakpoints.down('800')]: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
  },
  leftArea: {
    width: "25%",
    [theme.breakpoints.down('1300')]: {
      width: "10%",
    },
    [theme.breakpoints.down("1154")]: {
      width: "5%",
    },
    [theme.breakpoints.down("800")]: {
      width: "0%",
    },
  },
  rightArea: {
    width: "25%",
    margin: '1rem',
    [theme.breakpoints.down("1049")]: {
      display: 'none',
      width: "0%",
    },
  },
  link: {
    fontSize: '1rem',
    fontWeight: 'bold',
    padding: '3px',
  },
  blogContainer: {
    width: '100%',
    // background: theme.palette.background.paper,
    // boxShadow: theme.shadows[2],
    background: '#fafafa',
    overflow: 'hidden',
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
  heroImage: {
    width: '100%',
    height: '45vh',
    objectFit: 'cover',
    boxShadow: theme.shadows[6],
  },

  contentContainer: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    [theme.breakpoints.down('1000')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    [theme.breakpoints.down('800')]: {
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
    },
  },

  title: {
    fontSize: '2.5rem',
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    color: theme.palette.text.primary,
    cursor: 'pointer',
    margin: '4rem 0',
    [theme.breakpoints.down('800')]: {
      margin: '2rem 0',
      fontSize: '2rem',
    },
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '2rem',
    marginBottom: '1rem',
  },
  categories: {
    flex: 1,
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  paperBox: {
    padding: '1rem',
    background: 'white',
    position: '-webkit-sticky',
    position: 'sticky',
  },
  body: {
    fontSize: '18px',
    lineHeight: '28px',
    [theme.breakpoints.down(800)]: {
      fontSize: '14px',
      lineHeight: '24px',
    },
  },
  divider: {
    marginBottom: '1rem'
  }
}));

const Blog = ({ cover, categories, body, title, rating, created_at }) => {
  const classes = useStyles();

  return (
    <>
    <NextSeo
      title="blog-myhomely"
      description="detail of my homely blogs"
    />
    <div className={classes.root}>
      <div className={classes.leftArea}></div>
      <div className={classes.blogContainer}>
        <img
          src={process.env.NEXT_PUBLIC_STRAPI.concat(cover.url)}
          alt="hero-image"
          className={classes.heroImage}
        />
        <div className={classes.contentContainer}>
          <div className={classes.title}>{title}</div>

          <div className={classes.flexContainer}>
            <div className={classes.categories}>
              {categories.map((category) => (
                <Link href={`/category/${category.id}`} key={category.id}>
                  <a>
                    <Chip label={category.type} color="secondary" variant="outlined" />
                  </a>
                </Link>
              ))}
            </div>
            <div className={classes.rating}>
              <Rating
                defaultValue={rating / 2}
                precision={0.5}
                readOnly
                name="blog-rating"
              />
            </div>
          </div>
          <Box className={classes.readTime}
          >
            <div className={classes.duration}>{moment(created_at).format("MMMM Do YYYY")}</div>
            {/* <div className={classes.duration}>{minutesToRead ? minutesToRead : 5} minute read.</div> */}
          </Box>


          <div
            className={classes.body}
            dangerouslySetInnerHTML={{ __html: body }}
          ></div>
        </div>
      </div>
      <div className={classes.rightArea}>
        <SideMenue />
      </div>
    </div>
    </>
  );
};

export default Blog;

export const getStaticProps = async ({ params }) => {
  const { id } = params;

  try {
    const { data, error } = await client.query({
      query: BLOG,
      variables: { id: id },
    });

    if (error || !data) {
      return {
        notFound: true,
      };
    }

    const { blog } = data;
    const content = await markdownToHtml(blog.body);
    return {
      props: { ...blog, body: content },
      revalidate: 5000,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths = async () => {
  try {
    const { data, error } = await client.query({
      query: BLOG_IDS,
    });
    if (error || !data) {
      throw error;
    }
    const paths = data.blogs.map((blog) => ({
      params: { id: blog.id },
    }));

    /**
     * return must be in following format:
     * paths: [
     *  {params: {id}}
     * ]
     */

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    return {
      fallback: false,
      paths: [{ params: { id: '' } }],
    };
  }
};
