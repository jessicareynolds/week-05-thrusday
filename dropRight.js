function dropRight(arr , n) {
	// If n is larger than array length return []
	if ( n >= arr.length) {
		return []
	}

	arr.slice(0, (arr.length - n))
	// Use n to count in from the end to get the index
	return arr.slice(0, (arr.length -n))

	// Return a slice of the array using the index as the end
}
