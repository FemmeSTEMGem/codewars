// Your task is simply to count the total number of lowercase letters in a string.
// Examples
// "abc" ===> 3
// "abcABC123" ===> 3
// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
// "" ===> 0;
// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
// "abcdefghijklmnopqrstuvwxyz" ===> 26

function lowercaseCount(str){
  return str ? str.match(/[a-z]/g).length : 0
}

function lowercaseCount(str){
  return str.match(/[a-z]/g) ? str.match(/[a-z]/g).length : 0
}

console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))
// console.log(lowercaseCount(null))
// console.log(lowercaseCount(""))
// Gotta admit, I'm kinda mad at this one. When I use null or "" in my tests, I get 0...which is the expected result. But in CodeWars, it says that it "cannot read properties of null (reading 'length')". But it shouldn't even be getting to that because I'm already checking if str is true...which it's not if it's an empty string or null. I think this may be a fault of the test? Very frustrating. At least I got to practice my regex ^_^
// I figured it out! The test that was failing wasn't testing for null, it was testing for cases where the string was true, but contained none of the required characters. Even though my answer is fine, it repeats. This is a better version:
// function lowercaseCount(str){
//     return (str.match(/[a-z]/g) || []).length
//   }


// `Write a simple regex to validate a username. Allowed characters are:
//     lowercase letters,
//     numbers,
//     underscore
// Length should be between 4 and 16 characters (both included).`

function validateUsr(username) {
  return /^[0-9a-z_]{4,16}$/.test(username)
}

console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas'))
// I definitely had to look this up. ChatGPT did a really great job of breaking this down:
// ^[0-9a-z_]{4,16}$: This is a regular expression pattern enclosed within forward slashes (/). It defines the pattern that the username must match for it to be considered valid. Let's break down the components of this pattern:

//     ^: This is the start of the input string anchor. It signifies that the pattern should match from the beginning of the string.

//     [0-9a-z_]: This is a character class (enclosed within square brackets []). It matches any character that is a digit (0-9), lowercase letter (a-z), or an underscore (_).

//     {4,16}: This is a quantifier that specifies the allowed length of the matched string. In this case, it allows the string to be between 4 and 16 characters in length.

//     $: This is the end of the input string anchor. It signifies that the pattern should match until the end of the string.