function dropRight(arr , n) {
	// If n is larger than array length return []
	let newArr = []
		// Use n to count in from the end to get the index
	if ( n >= arr.length) {
		return []
	}
		// Return a slice of the array using the index as the end
	else {
		newArr = arr.slice(0,(arr.length - n))
	}
	return newArr
}
console.log(dropRight([1,2,3,4], 2))