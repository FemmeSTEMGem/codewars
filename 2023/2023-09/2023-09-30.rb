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


# Write a function that removes the spaces from the string, then return the resultant string.
# Examples:
# Input -> Output
# "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
# "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
# "8aaaaa dddd r     " -> "8aaaaaddddr"

def no_space(x)
  return x.gsub(" ", "")
end

print no_space('8 j 8   mBliB8g  imjB8B8  jl  B')
# Slightly more efficient, the best solution I saw was actually using x.delete(" ")...but I learned about two different methods today, so I'm happy.