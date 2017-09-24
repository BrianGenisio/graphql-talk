##  Mutations <!-- .element: data-theme="ka-content" -->

### Add a comment
```
mutation {
  addComment(input: {subjectId:"MDU6SXNzdWUyNTMwNDQwNDc=", body: "this is a test"}) {
    subject {
      id
    }
  }
}
```
