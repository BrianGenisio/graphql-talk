##  Fetch a tree from the graph <!-- .element: data-theme="ka-content" -->

```javascript

query {
  allPeople(first: 3) {
    people {
      name
      filmConnection(first: 7) {
        films {
          title
        }
      }
    }
  }
}
```
