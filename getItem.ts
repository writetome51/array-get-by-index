import { errorIfIndexNotValid }
	from '@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValid';


// index can be negative or positive.

export function getItem(index, array): any {
	errorIfIndexNotValid(index, array); // Validates both index and array.
	if (index < 0) {
		return array[array.length + index];
	}
	return array[index];
}
