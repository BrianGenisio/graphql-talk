##  Filters <!-- .element: data-theme="ka-content" -->

```
query {
  search(type:REPOSITORY, query: "graphql", first:100) {
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
