## Quick Example <!-- .element: data-theme="ka-content" -->

```
query {
  allPeople {
    people {
      id
      name
      birthYear
      homeworld {
        name
        population
      }
    }
  }
}
```
