const { buildSchema } = require("graphql");

const graphqlSchema = buildSchema(`
    type Author {
        id: ID!
        username: String
        email: String
    }
    
    type Post {
        id: ID!
        title: String
        content: String
    }

    type Query {
        authors: [Author]
        author(id: ID!): Author
        posts: [Post]
        post(id: ID!): Post
    }
`);

module.exports = graphqlSchema;
