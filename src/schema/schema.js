const { buildSchema } = require("graphql");

const graphqlSchema = `#graphql
    type User {
        id: ID!
        username: String
        email: String
        posts: [Post]
    }
    
    type Post {
        id: ID!
        title: String
        content: String
        author: User
    }

    type Query {
        users: [User]
        user(id: ID!): User
        posts: [Post]
        post(id: ID!): Post
    }
`;

module.exports = graphqlSchema;
