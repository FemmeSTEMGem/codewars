// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
// You need to consider the following ratings:
//     Terrible: tip 0%
//     Poor: tip 5%
//     Good: tip 10%
//     Great: tip 15%
//     Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
//     "Rating not recognised" in Javascript, Python and Ruby...
//     ...or null in Java
//     ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating) {
  let r = rating.toLowerCase()
  return r == "excellent" ? Math.ceil(amount*.2)
  : r == "great" ? Math.ceil(amount*.15)
  : r == "good" ? Math.ceil(amount*.1)
  : r == "poor" ? Math.ceil(amount*.05)
  : r == "terrible" ? 0
  : "Rating not recognised"
}
// Nice to use ternary operators like this again after a while. If I were using this in the real wold, though, I'd probably have an object that would hold the values of the ratings as keys and the tip percentages as the values.