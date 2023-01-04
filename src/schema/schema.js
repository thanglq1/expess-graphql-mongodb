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
        signin(email: String!, password: String!): User
        posts: [Post]
        post(id: ID!): Post
    }

    type Mutation {
        signup(username: String!, email: String!, password: String!): User
        createPost(title: String!, content: String!, authorId: String!): Post
    }
`;

module.exports = graphqlSchema;
