var express = require('express');
var graphqlHTTP = require('express-graphql');

var { schema } = require('./schema.js');
var { root } = require('./resolvers.js');

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
