# Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

def smash(words)
  words.join(" ")
end
# Easy peasy. Though interestingly, learned that the () are not necessary in Ruby


# You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
# Considering these factors, write a function that tells you if it is possible to get to the pump or not.
# Function should return true if it is possible and false if not.

def zero_fuel(distance, mpg, fuel_left)
  mpg * fuel_left >= distance
end

print zero_fuel(50, 25, 2)
# Easy peasy again. Always satisfying to play coding golf, but still have it be perfectly readable by a human. :)