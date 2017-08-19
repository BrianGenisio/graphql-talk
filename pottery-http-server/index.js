const express = require('express');
const graphqlHTTP = require('express-graphql');

const { schema } = require('./schema.js');
const { root } = require('./resolvers.js');

const mutationDoc = `mutation {
    first: createProject(name: "something new") {
      id, name
    }

    second: createProject(name: "something else new") {
      id, name
    }
}`;

const queryDoc = `query {
    projects {id, name}
}`;

express()
    .use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    }))
    .listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
