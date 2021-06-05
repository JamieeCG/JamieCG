// This converts a specified age (in years) to the correct amount in days.
function calcAge(age) {
	// The below if statement checks if the given entry is a number. If not it will return with the specified error message.
  if(isNaN(age)) throw new SyntaxError("The entry you gave was not a number. Try again.")

  // This will take the given age entry (for example 28) and will times it by 365.
	const entry = age * 365
	
  // It will the console log the specified age in days.
	return console.log(`Your age (${age}) in days is ${entry}.`)
}

// Makes the function run and converts the given age to days.
calcAge(28)