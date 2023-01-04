const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const graphqlSchema = require("./schema/schema");
const graphqlResolver = require("./resolver/resolver");

const app = express();

const server = new ApolloServer({
  typeDefs: graphqlSchema,
  resolvers: graphqlResolver,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then((data) => console.log(`server is running at`, data));
