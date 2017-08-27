##  N+1 -- [DataLoader](https://github.com/facebook/dataloader) <!-- .element: data-theme="ka-content" -->

Batch/Cache approach
```js
function fetchItemsById(ids: Array<string>): Promise<Array<Item>> {}
const itemLoader = new DataLoader(fetchItemsById);
itemLoader.load(id1);
itemLoader.load(id2);
itemLoader.load(id1);
```
