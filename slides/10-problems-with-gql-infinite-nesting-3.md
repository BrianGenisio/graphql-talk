##  Infinite Nesting <!-- .element: data-theme="ka-content" -->

Explicitly disallowed
```
fragment CommentFields {
    author
    text
    replies {
        ...CommentFields
    }
}

query {
    comments(articleId: $articleId) {
        ...CommentFields
    }
}
```
