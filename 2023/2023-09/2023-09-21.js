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