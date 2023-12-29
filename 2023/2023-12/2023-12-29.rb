# Implement a function which convert the given boolean value into its string representation.
# Note: Only valid inputs will be given.

def boolean_to_string(b)
  b.to_s
end
# I remembered that there was a method for turning things into strings, I just couldn't remeber what it was. I guessed and got it right! ^_^


# Create a function which answers the question "Are you playing banjo?".
# If your name starts with the letter "R" or lower case "r", you are playing banjo!
# The function takes a name as its only argument, and returns one of the following strings:
# name + " plays banjo" 
# name + " does not play banjo"
# Names given are always valid strings.

def are_you_playing_banjo(name)
  name.start_with?("R", "r") ? "#{name} plays banjo" : "#{name} does not play banjo"
end
# I remembered that there was probably a method for "starts with", though I had to look it up to be sure. Turns out htat mose booleanish Ruby methods have a "_" separating the words. In Rails, .start_with? is apparetnly .starts_with? instead (note the plural). Also, I learned that you can check for multiple prefixes and it will return true as long as one of them matches. That's extra awesome because it saved me the step of lower/uppercasing the name first. Ruby is great!! :D