# The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
# For example:
# 1.08 --> 30
# Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

def cockroach_speed(s)
  return ((s * 100000) / 3600).floor
end

print cockroach_speed(1.08)
# Other good solutions included Integer(s*100000/3600) and (s / 0.036).floor...though I'd say that the second one is a more mathy solution that I don't think I would have thought of on my own. I think I like the first alternate solution better than mine, though. :)


# Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
# "hello world".to_alternating_case() === "HELLO WORLD"
# "HELLO WORLD".to_alternating_case() === "hello world"
# "hello WORLD".to_alternating_case() === "HELLO world"
# "HeLLo WoRLD".to_alternating_case() === "hEllO wOrld"
# "12345".to_alternating_case()       === "12345"                 # Non-alphabetical characters are unaffected
# "1a2b3c4d5e".to_alternating_case()  === "1A2B3C4D5E"
# "String.prototype.toAlternatingCase".to_alternating_case() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
# As usual, your function/method should be pure, i.e. it should not mutate the original string.

class String
  def to_alternating_case (s)
    swapcase
  end
end
# Today I learned four things and I'm so happy! One: I learned about swapcase. At first I was just going to iterate through the string like you'd have to do if this was JavaScript. I went to the Ruby documentation, looked up "upper" in the page and found swapcase! Beautiful! Two: I remembered(ish) how to interact with functions inside of classes. I had to look up others' solutions, but they reminded me that you just use "self.swapcase". Wonderful! Three: Taking that last point a step further, you can apparently just say "swapcase" and it'll know what to do. Four: Taking that even one more step further, I re-remembered that Ruby has implicit return. You don't need to say "return", it'll just do it if you don't ask. Gosh I love Ruby so much! <3