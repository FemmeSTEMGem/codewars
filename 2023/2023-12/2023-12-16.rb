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


# Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
# The output should be two capital letters with a dot separating them.
# It should look like this:
# Sam Harris => S.H
# patrick feeney => P.F

def abbrev_name(name)
  "#{name.split[0][0]}.#{name.split[1][0]}".upcase()
end

print abbrev_name("patrick feeney")
# Annoyingly, the solution that was the same as mine was voted more as "Clever" than "Best Practices". And I don't agree with the top result for "Best Practices"...it's too messy to me. The other result I liked, though I don't understand it was:
# name.upcase.split.map(&:chr).join"."