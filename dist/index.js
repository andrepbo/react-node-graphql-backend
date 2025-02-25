import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `
  # This "Item" type defines the queryable fields for every item in our data source.
  type Item {
    name: String
  }

  type Query {
    items: [Item]
  }
`;
const items = [
    {
        name: 'The Awakening',
    },
    {
        name: 'City of Glass',
    },
];
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        items: () => items,
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
});
console.log(`Server ready at: ${url}`);
