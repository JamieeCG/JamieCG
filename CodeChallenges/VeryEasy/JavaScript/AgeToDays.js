function calcAge(age) {
	if(isNaN(age)) throw new SyntaxError("The entry you gave was not a number. Try again.")

	const entry = age * 365
	
	return console.log(`Your age (${age}) in years is ${entry}.`)
}

calcAge(28)