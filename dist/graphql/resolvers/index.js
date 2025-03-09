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
export const resolvers = {
    Query: {
        items: () => items,
    },
};
