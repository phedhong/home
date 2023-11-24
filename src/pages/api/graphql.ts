// import type { APIRoute } from 'astro';
// import { createYoga, createSchema } from 'graphql-yoga';
// import { getDataEntryById } from 'astro:content';

// const ShoppingCart = await getDataEntryById('example', 'cart');


// const schema = createSchema({
//   typeDefs: `
//     type CartItem {
//       id: Int!
//       name: String!
//       price: Float!
//       qty: Int!
//     }
//     type Query {
//       cart: [CartItem!]
//     }    
//   `,
//   resolvers: {
//     Query: {
//       cart: () => ShoppingCart,
//     },
//   },
// });

// const { handleRequest } = createYoga({
//   schema,
//   graphqlEndpoint: '/api/graphql',
//   fetchAPI: {
//     Request: Request,
//     Response: Response,
//   },
// });

// export const POST: APIRoute = async (context) => {
//   const { request } = context;
//   return handleRequest(request, context);
// };