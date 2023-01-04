const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const mongoose = require("mongoose");

const graphqlSchema = require("./schema/schema");
const graphqlResolver = require("./resolver/resolver");

const database = require("./database/db");

const uri = "mongodb://mongodb:27017/expressgraphql";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(uri, options)
  .then(() => {
    console.log("DB CONNECTED");

    const app = express();

    const server = new ApolloServer({
      typeDefs: graphqlSchema,
      resolvers: graphqlResolver,
    });

    startStandaloneServer(server, {
      listen: { port: 4000 },
      context: () => ({ database }),
    }).then((data) => console.log(`server is running at`, data));
  })
  .catch((error) => console.log(error));
