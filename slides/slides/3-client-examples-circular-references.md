##  Self references <!-- .element: data-theme="ka-content" -->

```
query {
  sessions {
    title
    abstract

    rooms {
      name
      sessions {
        title
      }
    }

    speakers {
      firstName
      lastName
    }
  }
}
```
