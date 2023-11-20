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