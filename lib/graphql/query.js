import { gql } from '@apollo/client';

export const HOME_FEATURED_ARTICLE_LIMIT = gql`
query GetBlog {
  blogs(limit: 3, sort: "rating:desc") {
    title
    body
    rating
    id
    created_at
    cover {
      url
    }
    categories {
      id
      type
    }
  }
}
`;

export const HOME_REAL_ESTATE_NEWS_LIMIT = gql`
query GetBlog {
  categories(limit: 3, where:{type:"Real estate news"}) {
  id
  type
    blogs {
        title
        body
        rating
        id
        created_at
        cover {
          url
        }
        categories {
          id
          type
        }
      }
}
}
`;

export const HOME_SELLING_YOUR_HOME_LIMIT = gql`
query GetBlog {
  categories(limit: 3, where:{type:"Selling"}) {
  id
  type
    blogs {
        title
        body
        rating
        id
        created_at
        cover {
          url
        }
        categories {
          id
          type
        }
      }
}
}
`;

export const HOME_BUYING_HOME_LIMIT = gql`
query GetBlog {
  categories(limit: 3, where:{type:"Buying"}) {
  id
  type
    blogs {
        title
        body
        rating
        id
        created_at
        cover {
          url
        }
        categories {
          id
          type
        }
      }
}
}
`;
export const HOME_RENTING_HOME_LIMIT = gql`
query GetBlog {
  categories(limit: 3, where:{type:"Renting"}) {
  id
  type
    blogs {
        title
        body
        rating
        id
        created_at
        cover {
          url
        }
        categories {
          id
          type
        }
      }
}
}
`;

export const HOME_MANAGE_YOUR_RENTAL_LIMIT = gql`
query GetBlog {
  categories(limit: 3, where:{type:"Manage your rental"}) {
  id
  type
    blogs {
        title
        body
        rating
        id
        created_at
        cover {
          url
        }
        categories {
          id
          type
        }
      }
}
}
`;

export const HOME_KNOWLEDGE_CENTER_LIMIT = gql`
query GetBlog {
  categories(limit: 3, where:{type:"Knowledge center"}) {
  id
  type
    blogs {
        title
        body
        rating
        id
        created_at
        cover {
          url
        }
        categories {
          id
          type
        }
      }
}
}
`;

export const BLOGS = gql`
  query GetBlog {
    blogs {
      title
      body
      rating
      id
      cover {
        url
      }
      categories {
        id
        type
      }
    }
  }
`;

export const BLOG_IDS = gql`
  query GetBlogId {
    blogs {
      id
    }
  }
`;

export const BLOG_TITLE = gql`
query GetBlogs($title: ID!) {
  blogs(where:{title_contains:$title}) {
    title
    id
  }
}
`;

export const BLOG = gql`
  query GetBlog($id: ID!) {
    blog(id: $id) {
      title
      body
      rating
      created_at
      id
      cover {
        url
      }
      categories {
        id
        type
      }
    }
  }
`;

export const CATEGORIES = gql`
  query GetCategories {
    categories {
      type
      id
    }
  }
`;

export const CATEGORY_POSTS = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      type
      id
      blogs {
        title
        body
        rating
        id
        cover {
          url
        }
        categories {
          id
          type
        }
      }
    }
  }
`;
export const CATEGORY_TYPE = gql`
  query GetCategories($type: ID!) {
    categories(where:{type:$type}) {
      type
      id
      blogs {
        title
        body
        rating
        id
        cover {
          url
        }
        categories {
          id
          type
        }
      }
    }
  }
`;

export const QUESTIONS = gql`
query GetQuestion {
  questions {
    id
    question
    answer
  }
}
`;
