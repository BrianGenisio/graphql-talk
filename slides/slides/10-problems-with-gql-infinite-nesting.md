##  Infinite Nesting <!-- .element: data-theme="ka-content" -->

```
query {
    comments(articleId: $articleId) {
        author, text, replies {
            author, text, replies {
                author, text, replies {
                    author, text, replies {
                        author, text
                    }
                }
            }
        }
    }
}
```
