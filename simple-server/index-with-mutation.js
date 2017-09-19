const { graphql, buildSchema } = require('graphql');

let storedMessage = 'Hello world!';

const schema = buildSchema(`
  type Query {
    hello: String
  }

  type Mutation {
      updateMessage(message: String!): String
  }
`);

const root = {
  hello: () => storedMessage,

  updateMessage: ({message}) => {
      storedMessage = message;
      return storedMessage;
  },
};

const queryDoc = `
  query {
    hello
  }
`;

const mutationDoc = `
  mutation {
      updateMessage(message: "Mutated result!")
  }
`

graphql(schema, mutationDoc, root)
    .then(() => graphql(schema, queryDoc, root))
    .then(response => console.log(response));
