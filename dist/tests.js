"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Test 1: index of -1 should return last item of array, and array should not be modified:
var result = index_1.getByIndex(-1, arr);
if (result === 10 && arr.length === 10)
    console.log('test 1 passed');
else
    console.log('test 1 FAILED.');
// Test 2: index of 0 should return first item of array:
result = index_1.getByIndex(0, arr);
if (result === 1 && arr.length === 10)
    console.log('test 2 passed');
else
    console.log('test 2 FAILED.');
// Test 2A: index of 9 should return last item of array:
result = index_1.getByIndex(9, arr);
if (result === 10 && arr.length === 10)
    console.log('test 2A passed');
else
    console.log('test 2A FAILED.');
// Test 2B: index of -10 should return first item of array:
result = index_1.getByIndex(-10, arr);
if (result === 1 && arr.length === 10)
    console.log('test 2B passed');
else
    console.log('test 2B FAILED.');
// Test 3: positive index exceeding array's range should trigger error:
var triggeredError = false;
try {
    result = index_1.getByIndex(10, arr);
}
catch (e) {
    triggeredError = true;
}
if (triggeredError)
    console.log('test 3 passed');
else
    console.log('test 3 FAILED.');
// Test 4: negative index exceeding array's range should trigger error:
triggeredError = false;
try {
    result = index_1.getByIndex(-11, arr);
}
catch (e) {
    triggeredError = true;
}
if (triggeredError)
    console.log('test 4 passed');
else
    console.log('test 4 FAILED.');
// Test 5: if something other than integer is passed as index, it should trigger error:
triggeredError = false;
try {
    result = index_1.getByIndex(1.02, arr);
}
catch (e) {
    triggeredError = true;
}
if (triggeredError)
    console.log('test 5 passed');
else
    console.log('test 5 FAILED.');
// Test 6: if something other than array is passed as second arg, it should trigger error:
triggeredError = false;
try {
    result = index_1.getByIndex(0, { 1: 0 });
}
catch (e) {
    triggeredError = true;
}
if (triggeredError)
    console.log('test 6 passed');
else
    console.log('test 6 FAILED.');
