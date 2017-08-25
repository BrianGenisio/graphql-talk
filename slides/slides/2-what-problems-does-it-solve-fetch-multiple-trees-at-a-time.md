##  Fetch multiple trees at a time <!-- .element: data-theme="ka-content" -->

```
query {
  allPeople(first: 10) {
    people {
      name
    }
  }

  allFilms(first: 10) {
    films {
      title
    }
  }
}
```
