// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


function getGrade (s1, s2, s3) {
  let x = (s1 + s2 + s3) / 3
  switch(true) {
    case (x >= 90):
      return 'A'
      break;
    case (x >= 80 && x < 90):
      return 'B'
      break;
    case (x >= 70 && x < 80):
      return 'C'
      break;
    case (x >= 60 && x < 70):
      return 'D'
      break;
    default:
      return 'F'
  }
}

console.log(getGrade(92,93,94))