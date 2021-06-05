function addsomethingafter(a) {
  // This will check if any entry is given at all. If not it will return with the specified error.
  if (typeof a === "undefined") throw new SyntaxError("You must give at least one word to add \"something\" to the end of.")

  // This will take the entry given and "something" at the end.
  return console.log(`${a}` + ` something`)
}

// Makes the function run and adds "something" to the end of the entry given.
addsomethingafter("something something something")