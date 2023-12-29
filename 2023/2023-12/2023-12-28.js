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