const crystal = {
    name: "Crystal",
    age: 23,
    gender: "female"
};

const resolvers = {
    Query: {
        person: () => crystal
    }
};

export default resolvers;