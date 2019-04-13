# getByIndex(index, array): any

Returns 1 item from `array`, accessed by its `index`.  It doesn't modify `array`.  
So why use this instead of simply writing `array[index]`?  This lets you use a   
negative `index`, and will also trigger an error if the `index` doesn't exist in the `array`.

## Examples
```ts
let arr = [1,2,3,4,5,6,7];

getByIndex(-1, arr); // --> 7

getByIndex(3, arr); // --> 4

getByIndex(-7, arr); // --> 1

getByIndex(-8, arr);
// Error: "The entered index is not valid.  Whether positive or negative,
           it exceeds the index range of the array."

getByIndex(7, arr);
// Error: "The entered index is not valid.  Whether positive or negative,
           it exceeds the index range of the array."
```

## Installation
`npm i  @writetome51/array-get-by-index`


## Loading
```ts
// if using TypeScript:
import { getByIndex } from '@writetome51/array-get-by-index';
// if using ES5 JavaScript:
var getByIndex = require('@writetome51/array-get-by-index').getByIndex;
```
