function dividesEvenly(a, b) {
	if(isNaN(a, b)) throw new SyntaxError("You must provide a valid number for both entries. Please try again.")

  if (a % b == 0) {
    return console.log(`${a, b} can be devided evenly!`)
   } else {
      return console.log(`${a, b} can not be devided evenly!`)
    }
  }

dividesEvenly(12, 6)