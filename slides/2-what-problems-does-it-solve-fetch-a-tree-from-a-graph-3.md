##  Fetch a tree from the graph <!-- .element: data-theme="ka-content" -->

```javascript
query {
  allPeople {
    people {
      id
      name

      filmConnection {
        films {
          id
          title
        }
      }
    }
  }
}
```
