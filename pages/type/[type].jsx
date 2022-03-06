import { Container, makeStyles } from '@material-ui/core';
import Masonry from 'react-masonry-css';
import { NextSeo } from 'next-seo';
import { CATEGORY_TYPE } from '../../lib/graphql/query';
import BlogCard from '../../components/blogCard/blogCards';
import { client } from '../../lib/graphql/client';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingLeft: '5rem',
    paddingRight: '5rem',
    marginTop: '1rem',
    [theme.breakpoints.down('1000')]: {
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
    [theme.breakpoints.down('400')]: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
  },
  cardContainer: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
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

export default function Type(props) {
  // styles
  const classes = useStyles();

  const { blogs } = props;

  const breakPoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  if (blogs.length === 0) {
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
        title="types-myhomely"
        description="detail of my types of myhomely.ca myhomely"
      />
      <div className={classes.root}>
        <Container>
          <Masonry
            breakpointCols={breakPoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {blogs.map((blog) => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </Masonry>
        </Container>
      </div>
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { type } = params;
  let replaceType = type.replaceAll('_', ' ');
  try {
    const {
      data: { categories },
      error,
    } = await client.query({
      query: CATEGORY_TYPE,
      variables: { type: replaceType },
    });
    const trimmedBlog = categories[0].blogs.map((blog) => ({
      ...blog,
      body: blog.body.substring(0, 100 + ((Math.random() * 1000) % 100)),
    }));
    return {
      props: { blogs: trimmedBlog},
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
