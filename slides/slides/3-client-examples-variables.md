##  Variables <!-- .element: data-theme="ka-content" -->

```js
query searchRepos($query: String!){
  search(type:REPOSITORY, query: $query, first:100) {
    nodes {
      ... on Repository {
        id
        nameWithOwner
        description
      }
    }
  }
}
```

```JSON
{
  "query": "graphql"
}
```
