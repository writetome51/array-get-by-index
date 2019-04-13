"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_index_not_valid_1 = require("error-if-index-not-valid");
// index can be negative or positive.
function getByIndex(index, array) {
    error_if_index_not_valid_1.errorIfIndexNotValid(index, array.length); // Validates both index and array.
    if (index < 0) {
        return array[array.length + index];
    }
    return array[index];
}
exports.getByIndex = getByIndex;
