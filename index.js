import {errorIfIndexNotValid} from 'error-if-index-not-valid';


// index can be negative or positive.

export function getByIndex(index, array) {
	const length = array.length;
	errorIfIndexNotValid(index, length); // Validates both index and array.

	if (index < 0) return array[length + index];
	return array[index];
}
