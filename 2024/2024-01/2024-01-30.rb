# Complete the solution so that it reverses all of the words within the string passed in.
# Words are separated by exactly one space and there are no leading or trailing spaces.
# Example(Input --> Output):
# "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

def solution(sentence)
  sentence.split(" ").reverse().join(" ")
end
# Easy peasy - though I just learned that I could have omitted the "" for .split() because I guess the default behaviour is to split at the spaces. Very cool!


# Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
# Can you help her?

def greet(name)
  name == "Johnny" ? "Hello, my love!" : "Hello, #{name}"
end
# Easy peasy - love ternary operations