This function simply returns 1 item from the array.  
Its main appeal is it lets you use a negative index.

Examples:

let arr = [1,2,3,4,5,6,7];

let item = getItem(-1, arr); // item is now 7

item = getItem(-3, arr); // item is now 5
