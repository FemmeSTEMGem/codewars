# Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
# For example (Input -> Output):
# 2 -> 3 (1 + 2)
# 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

def summation(num)
  i = 1
  count = 0
  while i <= num
    count += i
    i += 1
  end
  return count
end

print summation(2)
# Welp, looks like I completely forgot about the sum method in Ruby. Interestingly, I tried to use "sum" in a different way, just as a stab in the dark because I couldn't remember how to add up a bunch of numbers in Ruby. It's good to be getting back into this, though. The best answer was: (1..num).sum