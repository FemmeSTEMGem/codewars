# You get an array of numbers, return the sum of all of the positives ones.
# Example [1,-4,7,12] => 1 + 7 + 12 = 20
# Note: if there is nothing to sum, the sum is default to 0.

def positive_sum(arr)
  (arr.select {|num| num.positive?}).sum
end

print positive_sum([1,2,3,4,5])
# 15
# Except for a small delay from reading the instructions wrong, all was good for this exercise. In the solutions, I saw a really cool syntax I'd never seen before:
  # def positive_sum(arr)
  #   arr.select(&:positive?).sum
  # end
# Definitely want to look into this.


# In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
# Examples
# makeNegative(1);  # return -1
# makeNegative(-5); # return -5
# makeNegative(0);  # return 0
# Notes
#     The number can be negative already, in which case no change is required.
#     Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

def makeNegative(num)
  num.positive? ? -num : num
end

print make_negative(42)
# -42
# Easy enough. I will forever love ternary operations.