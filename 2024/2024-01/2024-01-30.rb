# Complete the solution so that it reverses all of the words within the string passed in.
# Words are separated by exactly one space and there are no leading or trailing spaces.
# Example(Input --> Output):
# "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

def solution(sentence)
  sentence.split(" ").reverse().join(" ")
end
# Easy peasy - though I just learned that I could have omitted the "" for .split() because I guess the default behaviour is to split at the spaces. Very cool!