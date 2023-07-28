// Replace all vowels to exclamation mark in the sentence. aeiouAEIOU is vowel.

function replace(s){
  return s.replace(/[aeiouAEIOU]/g, "!")
}

console.log(replace("ABCDE"))
// Gosh, I'm really starting to love regex. I don't know why they didn't teach it to us at Lighthouse. Maybe unecessary additional complication? Is it being phased out? This solution is the perfect reason for why I love regex so much. The solution is so simple. The additional thing I learned from the solutions on CodeWars was the ability to just give the lowercase vowels and add "i" to the global "g" so that it would replace regardless of upper/lower case. So great to know!