const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => 'Hello world!'
};

const queryDoc = `
  query {
    hello
  }
`

graphql(schema, queryDoc, root).then((response) => {
  console.log(response);
});
