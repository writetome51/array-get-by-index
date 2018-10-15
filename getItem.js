"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfIndexNotValid_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValid");
// index can be negative or positive.
function getItem(index, array) {
    errorIfIndexNotValid_1.errorIfIndexNotValid(index, array); // Validates both index and array.
    if (index < 0) {
        return array[array.length + index];
    }
    return array[index];
}
exports.getItem = getItem;
