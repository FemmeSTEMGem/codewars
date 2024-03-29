// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
// This function should return a number (final grade). There are four types of final grades:
//     100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
//     90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
//     75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
//     0, in other cases
// Examples(Inputs-->Output):
// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100
// 85, 5 --> 90
// 55, 3 --> 75
// 55, 0 --> 0
// 20, 2 --> 0

function finalGrade (exam, projects) {
  return exam > 90 || projects > 10 ? 100
  : exam > 75 && projects >= 5 ? 90
  : exam > 50 && projects >= 2 ? 75
  : 0
}

console.log(finalGrade(10, 15))
console.log(finalGrade(55, 3))
// I like my solution the best (and so did a lot of voters on CodeWars). Most of the differences were just in the variations between how the information was displayed - basic logic was the same, though.


// Messi is a soccer player with goals in three leagues:
//     LaLiga
//     Copa del Rey
//     Champions
// Complete the function to return his total number of goals in all three leagues.
// Note: the input will always be valid.
// For example:
// 5, 10, 2  -->  17

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

console.log(goals(5, 10, 2))
// This was a little too simplistic for the difficulty level given. However, in looking at the different answers, I like that people solved for a future problem where there are a lot more parameters than just three and writing their code accordingly: [..args].reduce, etc.