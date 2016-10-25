export default function indexOf(array, element) {
	let index = -1;
	let length = array.length;

	while (++index < length) {
		if (index in array && array[index] === element) {
			return index;
		}
	}

	return -1;
}
