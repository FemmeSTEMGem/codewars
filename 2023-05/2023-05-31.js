// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
  return Math.floor(marks.reduce(
    (accumulator, currentValue) => accumulator + currentValue) / marks.length)
}

// console.log(getAverage([1,2,3,4,5,]))


// Our football team has finished the championship.
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// For example: ["3:1", "2:2", "0:1", ...]
// Points are awarded for each match as follows:
//     if x > y: 3 points (win)
//     if x < y: 0 points (loss)
//     if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
// Notes:
//     our team always plays 10 matches in the championship
//     0 <= x <= 4
//     0 <= y <= 4

function points(games) {
  let scores = games.map(x => x.split('')).map(x => Number.parseInt(x))
  return scores
}


console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))

//! Unfinished