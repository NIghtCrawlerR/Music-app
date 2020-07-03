// export const typeDef = `
//   type Author {
//     id: Int!
//     firstName: String
//     lastName: String
//     books: [Book]
//   }
// `;

// export const resolvers = {
//   Author: {
//     books: () => { },
//   }
// };

///

// author.js
export const typeDef = `
  extend type Query {
    author(id: Int!): Author
  }

  type Author {
    id: Int!
    firstName: String
    lastName: String
    books: [Book]
  }
`;
export const resolvers = {
  Query: {
    author: () => { },
  },
  Author: {
    books: () => { },
  }
};