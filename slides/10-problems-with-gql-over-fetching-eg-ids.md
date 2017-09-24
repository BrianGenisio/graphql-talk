##  Over-fetching from the DB <!-- .element: data-theme="ka-content" -->

Example
```
query {
    students {
        assignments {
            id
        }
    }
}
```
