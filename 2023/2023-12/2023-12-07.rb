# Complete the square sum function so that it squares each number passed into it and then sums the results together.
# For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.

def square_sum(numbers)
  numbers.map{|x| x**2}.sum
end

print square_sum([1, 2])
# It's interesting to me that one of the top-voted solutions is the same as mine, but with .reduce(:+) instead of simply .sum. That seems strange to me. The top comment for it, though says "I take it that this used to be best practice prior to the inclusion of .sum in Ruby ~2.4. Or is reduce/inject still preferred?"...so this solution may just be out of date. Interesting that there was no sum in an earlier version of Ruby!


# Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
# Examples (input -> output)
# 6, "I"     -> "IIIIII"
# 5, "Hello" -> "HelloHelloHelloHelloHello"

def repeat_str (n, s)
  s*n
end

print repeat_str(3, "*")
# This one was a little bit funny. I was thinking of the JavaScript method .repeat() and trying to find something similar in Ruby. I tried to make .times() work for a bit until I realised that there was a far simpler way to solve this problem, lol. ^_^