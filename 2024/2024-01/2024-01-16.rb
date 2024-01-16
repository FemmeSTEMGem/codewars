# Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
# [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

  def grow(x) 
    x.reduce(:*)
  end

# print grow([1, 2, 3, 4])
# Turns out this is a lot harder to do when you forget about the .reduce() method. Jfc... -_-


# Build a function that returns an array of integers from n to 1 where n>0.
# Example : n=5 --> [5,4,3,2,1]

def reverse_seq(n)
  (1..n).to_a.reverse

end

print reverse_seq(5)
# I definitely remembered something about being able to use ".." between numbers. Took a while to find, but I got it!