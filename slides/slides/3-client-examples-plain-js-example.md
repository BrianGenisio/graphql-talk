##  Plain JS example <!-- .element: data-theme="ka-content" -->

```js
const document = `
    query {
        sessions {
        title
        abstract
        }
    }
`;

fetch("/graphql", {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({query: document})
})
.then(response => response.json())
.then(result => console.log(result));
```
