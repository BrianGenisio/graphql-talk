var { graphql } = require('graphql');
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

graphql(schema, mutationDoc, root)
    .then(() => {
        return graphql(schema, queryDoc, root);
    })
    .then((response) => {
        console.log(JSON.stringify(response));
    });
