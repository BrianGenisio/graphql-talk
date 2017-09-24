##  Dig deeper <!-- .element: data-theme="ka-content" -->

```
query {
  allPeople {
    people {
      id
      name
      hairColor
      homeworld {
        name
        population
      }

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
