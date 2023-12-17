# The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
# Task
# Given a year, return the century it is in.
# Examples
# 1705 --> 18
# 1900 --> 19
# 1601 --> 17
# 2000 --> 20
# Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here

def century(year)
  (year / 100.0).ceil
end

# print century(1705)
# This one actually bamboozled me for a bit because I forgot the rule in Ruby where, when you perform arithmetic operations in Ruby with two integers, the result will automatically be an integer. If you want your result to include any decimals, at least one of the numbers needs to include a decimal place. So, in my solution above, I couldn't figure out why (year / 100).ceil wasn't working. Now I know! Also, it's very simple math, but I remember doing this problem in another language at some point and it just wasn't clicking for me. Just goes to show how your brain can have dumb days with the simplest things sometimes. ^_^