// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30

// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
  return Math.floor(s*27.778)
}

console.log(cockroachSpeed(1.08))


// The Story:
// 
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
//
// Task Overview:
// 
// You have to write a function that accepts three parameters:
// 
    // cap is the amount of people the bus can hold excluding the driver.
    // on is the number of people on the bus excluding the driver.
    // wait is the number of people waiting to get on to the bus excluding the driver.
// 
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

function enough(cap, on, wait) {
  let ridership = cap - on - wait
  if (ridership < 0) {
    return -ridership
  }
  return 0
}

console.log(enough(10, 5, 5))
console.log(enough(100, 60, 50))
//No idea why I didn't think to use a ternary operator for this, lol - Saw an excellent use of Math.max() in the solutions