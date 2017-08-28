##  Think in graphs <!-- .element: data-theme="ka-content" -->

DON'T
```
query {
    person {
        parentIds
    }
}
```

DO
```
query {
    person {
        parents {
            id
        }
    }
}
```
