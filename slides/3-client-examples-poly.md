##  Polymorphism <!-- .element: data-theme="ka-content" -->

```
query {
  search(type:USER, query: "BrianGenisio", first:1) {
    nodes {
      ... on User {
        databaseId
        company
        bio
        contributedRepositories(first: 100) {
          nodes {
            name
          }
        }
      }
    }
  }
}
```
