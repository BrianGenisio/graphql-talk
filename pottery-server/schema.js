var { buildSchema } = require('graphql');

var schema = `
  type Project {
      id: ID!
      name: String
  }

  type Mutation {
      createProject(name: String!): Project!
  }

  type Query {
    projects: [Project]
  }
`;

module.exports = {
    schema: buildSchema(schema)
};
