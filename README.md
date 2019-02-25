# getByIndex(index, array): any

Returns 1 item from `array`, accessed by its `index`.  It doesn't modify the `array`.  
So why use this instead of simply writing `array[index]` ?    This lets you use a   
negative `index`, and will also trigger an error if the `index` doesn't exist in the `array`.

## Examples
```
let arr = [1,2,3,4,5,6,7];

getByIndex(-1, arr); // --> 7

getByIndex(3, arr); // --> 4

getByIndex(-7, arr); // --> 1

getByIndex(-8, arr); // triggers error, since array only has 7 items.

getByIndex(7, arr); // triggers error, since array only has 7 items.
```

## Loading
```
import { getByIndex } from '@writetome51/array-get-by-index';

```