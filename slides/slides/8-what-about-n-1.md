##  N+1 -- [DataLoader](https://github.com/facebook/dataloader) <!-- .element: data-theme="ka-content" -->

Naive approach
```js
function fetchItemById(id: string): Promise<Item> {}
fetchItemById(id1);
fetchItemById(id2);
fetchItemById(id1);
```
