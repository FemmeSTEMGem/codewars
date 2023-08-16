// Replace all vowels to exclamation mark in the sentence. aeiouAEIOU is vowel.

function replace(s){
  return s.replace(/[aeiouAEIOU]/g, "!")
}

// console.log(replace("ABCDE"))
// Gosh, I'm really starting to love regex. I don't know why they didn't teach it to us at Lighthouse. Maybe unecessary additional complication? Is it being phased out? This solution is the perfect reason for why I love regex so much. The solution is so simple. The additional thing I learned from the solutions on CodeWars was the ability to just give the lowercase vowels and add "i" to the global "g" so that it would replace regardless of upper/lower case. So great to know!


// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.
// Find the errors in the code to get the celsius converter working properly.
// To convert fahrenheit to celsius:
// celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5/9)
  return celsius
}

function weatherInfo(temp) {
  var c = convertToCelsius(temp)
  if (c < 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

console.log(weatherInfo(50))
// Just some good old debugging. For funzies, I made things more efficient below:

function betterFunction(fahrenheit) {
  let celsius = Math.floor((fahrenheit - 32) * (5/9))
  return celsius < 0 ? `${celsius} is freezing temperature` : `${celsius} is above freezing temperature`
}

console.log(betterFunction(10))