// It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight the winner will make his legendary statement. It's your job to return the right statement depending on the winner!
// If the winner is George Saint Pierre he will obviously say:
//     "I am not impressed by your performance."
// If the winner is Conor McGregor he will most undoubtedly say:
//     "I'd like to take this chance to apologize.. To absolutely NOBODY!"
// Good Luck!
// Note
// The given name may varies in casing, eg., it can be "George Saint Pierre" or "geOrGe saiNT pieRRE". Your solution should treat both as the same thing (case-insensitive).

function quote(fighter) {
  return fighter.toLowerCase() == "george saint pierre" ? "I am not impressed by your performance." : "I'd like to take this chance to apologize.. To absolutely NOBODY!"
}
// Easy peasy, though if I were doing this in the real world, I'd account for an invalid parameter. Also, kinda funny because I was coming from SQL land, I did a single = instead of ==...but I was able to figure out the error quickly at least. ^_^


// This function should return an object, but it's not doing what's intended. What's wrong?

function mystery() {
  var results =
    {sanity: 'Hello'}
  return results
}

console.log(mystery())
//  This problem was actually really interesting, despite being really straightforward. The original funtion looked exactly the same, except that "results" was on its own one line down. The first thing I noticed was that "results" was greyed out...so I brought it up next to "return" and it lit up again. Easy peasy.
// It has always been my understanding that JavaScript doesn't usually care about whitespace or line breaks, so I wanted to know why the code behaved this way. ChatGPT to the rescue!:
// "Due to automatic semicolon insertion (ASI) in JavaScript, a semicolon is inserted after the return statement, effectively causing the function to return undefined."