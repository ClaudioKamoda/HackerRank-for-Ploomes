//56.25% Correct

function abbreviation(a, b) {
	// Write your code here

	//Auxiliar Variables
	let index = -1
	let cur_index = -1

	//This for deals with the case where there is a capital letter in A that doesn't exist in B, which means it can't be deleted
	for (const char of a) {
		if (char == char.toUpperCase() && !b.includes(char)) return 'NO'
	}

	//this for iterates on every char in B
	for (const char of b) {
		if (a.includes(char)) {
			//Checks if A has the char is in B
			cur_index = a.indexOf(char, index + 1) // gets the index of it in A
		} else if (a.includes(char.toLowerCase())) {
			//Checks if A has the lower Case char in B
			cur_index = a.indexOf(char.toLowerCase(), index + 1) //gets the index of it
		}
		if (cur_index > index) {
			index = cur_index //updates the index, so the B sequence still exists
		} else {
			return 'NO' // if the characters exists but is on a previous position, prints NO
		}
	}

	return 'YES'
}
