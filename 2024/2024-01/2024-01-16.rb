# Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
# [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

def grow(x) 
  def grow(x) 
    x.reduce(:*)
  end
end

print grow([1, 2, 3, 4])
# Turns out this is a lot harder to do when you forget about the .reduce() method. Jfc... -_-