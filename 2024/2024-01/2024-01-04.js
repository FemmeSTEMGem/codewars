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