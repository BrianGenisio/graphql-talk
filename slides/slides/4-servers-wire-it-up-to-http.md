##  Wire it up to HTTP <!-- .element: data-theme="ka-content" -->

```js
const express = require('express');
const graphqlHTTP = require('express-graphql');

express()
    .use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    }))
    .listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
```
