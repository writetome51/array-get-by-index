To include in your project:

import { getByIndex } from '@writetome51/array-get-by-index';

getByIndex(index, array): any

This function simply returns 1 item from an array, accessed by its index.  It doesn't modify the array.
Its main appeal is that it lets you use a negative index, and will also trigger an error if the index 
doesn't exist in the array.

Examples:

let arr = [1,2,3,4,5,6,7];

let item = getByIndex(-1, arr); // item is now 7

item = getByIndex(3, arr); // item is now 4

item = getByIndex(-7, arr); // item is now 1

item = getByIndex(-8, arr); // triggers error, since array only has 7 items.

item = getByIndex(7, arr); // triggers error, since array only has 7 items.