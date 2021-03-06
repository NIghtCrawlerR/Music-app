// export const typeDef = `
//   type Book {
//     title: String
//     author: Author
//   }
// `;

// export const resolvers = {
//   Book: {
//     author: () => { },
//   }
// };

// book.js
export const typeDef = `
  extend type Query {
    book(id: Int!): Book
  } 
  type Book {
    title: String
    author: Author
  }
`;

export const resolvers = {
  Query: {
    book: () => { },
  },
  Book: {
    author: () => { },
  }
};