// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `
  # This "Item" type defines the queryable fields for every item in our data source.
  type Item {
    name: String
  }

  type Query {
    items: [Item]
  }
`;
