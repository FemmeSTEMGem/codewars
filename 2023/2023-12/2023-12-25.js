// It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.
// It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.
// Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...
// Go show some truth who's boss!

function ifChuckSaysSo() {
  return !true
}
// Easy, but a cute exercise so I don't mind. ^_^


// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:
// multiply(3)==15 // 3 * 5¹
// multiply(10)==250 // 10 * 5²
// multiply(200)==25000 // 200 * 5³
// multiply(0)==0 // 0 * 5¹
// multiply(-3)==-15 // -3 * 5¹

function multiply(number){
  return number * 5**`${Math.abs(number)}`.length
}
// My solution was about right. The only thing that might make it better would be the use of .toString() instead of using interpolation. Still, glad I got one of the better solutions.