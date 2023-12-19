// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.
// Valid examples, should return true:
  // isDigit("3")
  // isDigit("  3  ")
  // isDigit("-3.23")
// should return false:
  // isDigit("3-4")
  // isDigit("  3   5")
  // isDigit("3 5")
  // isDigit("zero")

function isDigit(s) {
  return parseFloat(s) == Number(s)
}
// This one actually messed with me because I thought I could just use Number() because I didn't really understand how it works differently from parseFloat(). I thought they basically both convert something that's NaN to a number, though parseFloat() does it as a floating point number. I didn't realize that, when applied to strings with wonky numbers, that it would just give a floating point number for the first digit it could find, which means that it would give you a different result than just calling Number() on the same input. Feels a little fiddly for kata at this level. ^_^


// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.
// Examples:
// uniTotal("a") == 97
// uniTotal("aaa") == 291

function uniTotal (string) {
  return string.split('').map(x => x.charCodeAt(0)).reduce((a, b) => a+b, 0)
}

console.log(uniTotal("aaa"))
// The next best version of this doesn't use .map() at all and instead looks like this:
  return s.split('').reduce((t, a) => t + a.charCodeAt(0), 0)
  // But the callback nature of this is twisting my brain in a way that I can't quite deal with right this moment, so I went to ChatGPT. I think I just needed to be walked through it so that I could picutre what was happening to each element of the array as the reduce() method moved through it. Much clearer now!:
  // .reduce((t, a) => t + a.charCodeAt(0), 0): This is using the reduce method on the array created by s.split(''). The reduce method is often used to accumulate a single result from an array. It takes a callback function and an initial value.
    // The callback function takes two parameters: t (total) and a (current element). In your case, t represents the accumulated sum, and a represents the current character in the array.
    // a.charCodeAt(0) gets the ASCII code of the current character a. This is similar to what you did in your original solution with x.charCodeAt(0).
    // The callback function then adds the current ASCII code to the total (t).
    // The second argument to reduce is the initial value of t, which is set to 0.
    // The reduce method iterates over each character in the array, applying the callback function and accumulating the sum.