// The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:
// [This is writen in pseudocode]
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1
// #Task
  // Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.
// #Examples
  // hotpo(1) returns 0
  // (1 is already 1)
  // hotpo(5) returns 5
  // 5 -> 16 -> 8 -> 4 -> 2 -> 1
  // hotpo(6) returns 8
  // 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
  // hotpo(23) returns 15
  // 23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

  var hotpo = function(n){
    let count = 0
    for (let i = 0; n !== 1; count++) {
      if (n % 2 == 0) {
        n = n/2
      }
      else {
        n = 3*n + 1
      }
    }
    return count
  }
  // I like mine; it's super clear, but I saw another solution that I liked a little better:
    // var hotpo = function(n){
    //   var count = 0;
    //   while (n>1){
    //     count++;
    //     n = n%2 ? n*3+1 : n/2;
    //   }
    //   return rs;
    // }
  // Basically the same thing, but shorter and still clear. Perfect!