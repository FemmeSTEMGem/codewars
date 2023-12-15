// Implement String#digit?, which should return true if given object is a digit (0-9), false otherwise.

String.prototype.digit = function() {
  return /^[0-9]$/.test(this)
};
// This one was a struggle for me because my original solution didn't include the ^ or $ symbols. I absolutely had to unlock the solutions to find out the answer. I wasn't sure what these symbols were doing, so I asked ChatGPT. Man, say what you will about ChatGPT, but it works so well most of the time for what I use it for:
// The ^ and $ symbols in a regular expression have special meanings:

//     ^ (caret): Asserts the start of a line. In this context, it makes sure that the digit being tested is at the beginning of the string.

//     $ (dollar sign): Asserts the end of a line. In this context, it ensures that the digit being tested is at the end of the string.

// The regular expression /^[0-9]$/ is designed to match a string that contains only a single digit. Let's break down the regular expression:

//     ^: Asserts that the match occurs at the start of the string.
//     [0-9]: Matches a single digit (0 to 9).
//     $: Asserts that the match occurs at the end of the string.

// So, the regular expression /^[0-9]$/ checks if the entire string is a single digit.

// In contrast, if you don't use ^ and $, your regular expression /[0-9]/ will match any string that contains at least one digit, regardless of its position within the string. This is why some of your test cases failed. Let's go through them:

//     '7'.digit() passed because the string contains a single digit ('7').
//     'a5'.digit() failed because the string contains a digit ('5'), but the regular expression matches the entire string, so it returns false.
//     '14'.digit() failed for the same reason; the regular expression is looking for a single digit, but the string contains two digits.

// By using ^ and $, you ensure that the regular expression matches the entire string and not just a part of it, making the function behave as intended for the specified problem.



// Finish the uefaEuro2016() function so it return string just like in the examples below:
// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

function uefaEuro2016(teams, scores){
  let result = scores[0] > scores[1] ? `${teams[0]} won!` :
  scores[0] < scores[1] ? `${teams[1]} won!` :
  `teams played draw.`

  return `At match ${teams[0]} - ${teams[1]}, ${result}`
}
// My solution works well and I think is one of the tidiest of the bunch. But I think I like this other person's a little more. It's longer, but I think a lot easier to read:

function uefaEuro2016(teams, scores) {
  const [team1, team2] = teams
  const [score1, score2] = scores
  const winner = score1 > score2 ? team1 : team2

  return score1 === score2
      ? `At match ${team1} - ${team2}, teams played draw.`
      : `At match ${team1} - ${team2}, ${winner} won!`
}