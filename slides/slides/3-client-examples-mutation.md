##  Mutations <!-- .element: data-theme="ka-content" -->

### Find the issue (subject ID) to comment on
```
query {
  user(login:"briangenisio") {
    repository(name:"MyRecipeBox") {
      issues(first:10) {
        nodes {
          id
          title
        }
      }
    }
  }
}
```
