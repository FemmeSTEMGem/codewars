// You are going to make toast fast, you think that you should make multiple pieces of toasts and once. So, you try to make 6 pieces of toast.
// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.
// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.
// Examples:
// You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:
// six_toast(5) == 1
// And in case of 12 you need 6 toasts less (but not -6):
// six_toast(12) == 6

function sixToast(num) {
  return num > 6 ? num - 6
  : num < 6 ? 6 - num
  : 0
}

console.log(sixToast(6))
// One result that I think is better is Math.abs(6 - n)...also return num >= 6 ? num - 6 : num. Both much better. Gotta keep Math.abs() in mind more often.


// An AI has infected a text with a character!!
// This text is now fully mutated to this character.
// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!
// Note: The character is a string of length 1 or an empty string.
// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

// function contamination(text, char){
//   return !text || !char ? "" : char.repeat(text.length)
// }

function contamination(text, char) {
  return text.replace(/./g, char);
}

console.log(contamination("", "z"))
// Better solutions include one without the gate condition that checks if text or char is true...because it works fine without it. However, as one commenter pointed out, this wouldn't be a good solution for best practices because the intent to return an empty string if text or char is empty wouldn't be clear. Instead, the best solution I think uses regex: return text.replace(/./g, char), but mine is a pretty close second, imo.