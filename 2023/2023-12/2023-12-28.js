// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```

// Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings

var templateStrings = function(noun, adjective) {
  return `${noun} are ${adjective}`
}
// An easy one, thought interesting to learn that this is a newer (relatively) feature that used to be called "Template Strings" (though the MDN docs have updated the title to "template literals", which is what I know them as). Probably not a terrible idea to know the old names for things.


// You and a friend have decided to play a game to drill your statistical intuitions. The game works like this:
// You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly.
// You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:
//     the number of blue marbles you put in the bag to start
//     the number of red marbles you put in the bag to start
//     the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
//     the number of red marbles pulled out so far (always lower than the starting number of red marbles)
// guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  return (blueStart - bluePulled) / ((redStart - redPulled) + (blueStart - bluePulled))
}
// Except for a silly math mistake at the beginning (I was dividing blue by red rather than blue by total remaining), it was easy peasy. :) Just goes to show you can still make silly mistakes regardles of how easy the problem is. ^_^