
# Tech Stack

> [Next.js](https://nextjs.org/)

> [Strapi](https://strapi.io)

> [Apollo GraphQL](https://www.apollographql.com/)

# Getting Started

Clone the repo

> :warning: **Must start strapi server before Next Front-End to view content**


# Strapi Server

Find the backend folder in the root directory of this project and open terminal there.

> :warning: **You must be on [node](https://nodejs.org) LTS version**: The graphql implementation on strapi contains some deprications.

Install Dependencies

```bash
npm install
```



Run the development server:

```bash
npm run develop
```

Open [http://localhost:1337](http://localhost:1337) with your browser to see the result.




# Next Front-End

Install Dependencies

```bash
npm install
```

> :warning: **Dont modify versions of remark plugins in package.json**: 

These packages allow to parse any html in the markdown files. Because as of now you next doesn't support native import of ESM files.

```json
{
    "dependencies": {
        "remark": "13.0.0",
        "remark-html": "13.0.1"
    }
}
```



Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

