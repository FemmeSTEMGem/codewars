# There was a test in your class and you passed it. Congratulations!
# But you're an ambitious person. You want to know if you're better than the average student in your class.
# You receive an array with your peers' test scores. Now calculate the average and compare your score!
# Return True if you're better, else False!
# Note:
# Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

def better_than_average(arr, points)
  (arr.sum + points) / (arr.length + 1) < points
end

print better_than_average([100, 40, 34, 57, 29, 72, 57, 88], 75)
# There's another solution that's exactly the same as mine, but uses arr.inject(:+) instead of arr.sum. Turns out that's an older Ruby version way of adding elements in an array. Using sum was introduced in Ruby 2.4.0. Thanks, ChatGPT!