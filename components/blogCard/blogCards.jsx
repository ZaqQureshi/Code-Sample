import { Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useStylesBlogCard } from './blogCard.styles';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import markdownToHtml from '../../lib/remark/markdownToHtml';
import Chip from '@material-ui/core/Chip';
import Box from "@mui/material/Box";
import moment from "moment";

const BlogCard =({
  blog: { title, rating, body, categories, cover, id, minutesToRead, created_at}
}) => {
  // styles
  const classes = useStylesBlogCard();

  return (
    <div className={classes.cardRoot}>
      {cover?.url?.length > 0 && (
        <img
          src={process.env.NEXT_PUBLIC_STRAPI.concat(cover.url)}
          alt="blogPhoto"
          className={classes.previewimage}
        />
      )}

      <Link href={`/blog/${id}`}>
        <a>
          <div className={classes.title}>{title}</div>
        </a>
      </Link>

      <div className={classes.flexContainer}>
        <div className={classes.categories}>
          {categories.slice(0,2).map((category) => (
            <Link href={`/category/${category.id}`} key={category.id}>
              <a>
                <Chip 
                className={classes.category}
                label={category.type} 
                color="secondary" 
                variant="outlined" />
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
      <div className={classes.duration}>{minutesToRead?minutesToRead:5} minute read.</div>
      <div className={classes.duration}>{moment(created_at).format("MMMM Do YYYY")}</div>
      </Box>


      <div className={classes.subfield}>
        <ReactMarkdown children={`${body.slice(0,100)}...`} />
        {/* {body} */}
      </div>
    </div>
  );
};

export default BlogCard;
