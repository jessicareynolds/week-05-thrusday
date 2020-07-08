function flatten(arr) {
	let ret = []

	for (let x = 0; x < arr.length; i++) {
		if (Array.isArray(arr[x])) {
			ret = ret.concat(arr[x])
		} else {
			ret.push(arr[x])
		}
	}
	return ret
}
	// Create a new array
	// Loop through every item in the array
	// If the item is an array, add its items to the new array
	// If not add the item itself to the new array
	// return the new array