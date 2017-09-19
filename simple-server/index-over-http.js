const {buildSchema} = require('graphql');
const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => 'Hello world!'
};

express()
    .use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    }))
    .listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
