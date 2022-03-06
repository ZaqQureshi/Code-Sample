import { Container, makeStyles } from '@material-ui/core';
import { NextSeo } from 'next-seo';
import Masonry from 'react-masonry-css';
import { CATEGORY_POSTS } from '../../lib/graphql/query';
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
}));

export default function Category(props) {
  // styles
  const classes = useStyles();

  const { blogs } = props;

  const breakPoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
    <NextSeo
      title="category-myhomely"
      description="detail of my categories of myhomely.ca myhomely"
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
  const { id } = params;
  try {
    const {
      data: { category },
      error,
    } = await client.query({
      query: CATEGORY_POSTS,
      variables: { id: id },
    });

    if (error || !category?.blogs?.length) {
      throw error;
    }

    const trimmedBlog = category.blogs.map((blog) => ({
      ...blog,
      body: blog.body.substring(0, 100 + ((Math.random() * 1000) % 100)),
    }));

    return {
      props: { blogs: trimmedBlog, params: params },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
