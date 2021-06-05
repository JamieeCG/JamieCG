// This checks if entry a can be divided evenly with entry b. 

function dividesEvenly(a, b) {
	
  // This if statement checks if both the a and b entry are a number. If not it returns an error.
  if(isNaN(a, b)) throw new SyntaxError("You must provide a valid number for both entries. Please try again.")

  // This if statement checks if entry a can be divided evenly with entry b. If it can it will return true (with the specified console log). Otherwise, it will return false (with the specified console log).
  if (a % b == 0) {
    return console.log(`${a, b} can be devided evenly!`)
   } else {
      return console.log(`${a, b} can not be devided evenly!`)
    }
  }

// Makes the function run and checks if 12 is divisable by 6 evenly.
dividesEvenly(12, 6)