import { GraphQLClient, gql } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.HYGRAPH_URL, {
  headers: {
    authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  }
});

export async function getProducts() {
  const query = gql`
    query ProductsQuery {
      produtos {
        id
        label
        category
        imgSrc
        price
        isHilighted
        description
        items {
          ... on Item {
            id
            code
            image
            color
            rgb {
              hex
            }
            sizes {
              ... on Size {
                size
                quantity
                id
              }
            }
          }
        }
      }
    }
  `;

  const data = await graphcms.request(query);
  return data.produtos;
}
