// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
//     "I love you"
//     "a little"
//     "a lot"
//     "passionately"
//     "madly"
//     "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

function howMuchILoveYou(nbPetals) {
  let counter = 1
  for (let i = 0; i < nbPetals -1; i++) {
    if (counter == 6) {
      counter = 1
    }
    else {
      counter++
    }
  }
  return counter == 1 ? "I love you"
    : counter == 2 ? "a little" 
    : counter == 3 ? "a lot"
    : counter == 4 ? "passionately"
    : counter == 5 ? "madly"
    : "not at all"
}

console.log(howMuchILoveYou(7)) // "I love you"
console.log(howMuchILoveYou(3)) // ,"a lot")
console.log(howMuchILoveYou(6)) //"not at all")
// A combination of an array and modulo would have been far simpler - I don't know why, but I sometimes resist the use of modulo


// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger. 
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.
// If you can, try writing it in one line of code.

function findDifference(a, b) {
  return Math.abs((a[0]*a[1]*a[2]) - (b[0]*b[1]*b[2]))
}

console.log(findDifference([3, 2, 5], [1, 4, 4])) // 14);
console.log(findDifference([9, 7, 2], [5, 2, 2])) // 106);
// This was just about the best solution. The only one I saw that I liked a little better was one that separated out the parameters --> function findDifference([a, b, c], [d, e, f]) so that you could have a*b*c-d*e*f which was pretty nice looking
