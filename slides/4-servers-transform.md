##  Transform <!-- .element: data-theme="ka-content" -->

```js
const queryDoc = `
  query {
    hello
  }
`

graphql(schema, queryDoc, root).then((response) => {
  console.log(response);
});
```
