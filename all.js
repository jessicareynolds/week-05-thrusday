const array = [true, false]

function all(arr) {
	
	for( let x = 0; x < arr.length; x++ ) {
		if ( !arr[ x ]) { 
			return false }
	
	else if ( x >= arr.length ) {
			return true

		}
		return arr
	}
	// Loop through every item in the array
	// If the item evaluates to false, return false

	// If the loop ends, return true
}

console.log(all(array))
