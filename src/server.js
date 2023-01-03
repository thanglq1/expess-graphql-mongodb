const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const graphqlSchema = require("./schema/schema");
const graphqlResolver = require("./resolver/resolver");

const app = express();

// Middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Server is running at localhost:4000/graphql");
});
