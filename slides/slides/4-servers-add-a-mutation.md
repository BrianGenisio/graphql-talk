##  Add a mutation <!-- .element: data-theme="ka-content" -->

```js
const schema = buildSchema(`
  type Mutation {
      updateMessage(message: String!): String
  }
`);
```

```js
const root = {
  updateMessage: ({message}) => {
      storedMessage = message;
      return storedMessage;
  },
};
```
