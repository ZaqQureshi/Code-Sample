import { useQuery } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { CATEGORIES } from '../../lib/graphql/query';
import { useStylesCategorySelector } from './categorySelector.styles';

const CategorySelector = () => {
  // styles
  const classes = useStylesCategorySelector();

  const { query, route } = useRouter();

  const { data, error, loading } = useQuery(CATEGORIES);

  if (loading || error) {
    return '';
  }

  const { categories } = data;

  const highlightClass = (id) => {
    if (query?.id && query.id === id && route.startsWith('/category')) {
      return classes.highlighted;
    }
    return '';
  };

  return (
    <div className={classes.categoryContainer}>
      {categories.map(({ type, id }) => (
        <Link href={`/category/${id}`} key={id}>
          <a className={`${classes.category} ${highlightClass(id)}`}>{type}</a>
        </Link>
      ))}
    </div>
  );
};

export default CategorySelector;
