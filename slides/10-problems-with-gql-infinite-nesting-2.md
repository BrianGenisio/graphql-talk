##  Infinite Nesting <!-- .element: data-theme="ka-content" -->

```
fragment CommentFields {
    author
    text
}

query {
    comments(articleId: $articleId) {
        ...CommentFields, replies {
            ...CommentFields, replies {
                ...CommentFields, replies {
                    ...CommentFields, replies {
                        ...CommentFields, 
                    }
                }
            }
        }
    }
}
```
