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