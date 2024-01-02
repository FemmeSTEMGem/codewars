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


# Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
# Assumptions
#     You can assume that you are only given numbers.
#     You cannot assume the size of the array.
#     You can assume that you do get an array and if the array is empty, return 0.

def sum(numbers)
  numbers.sum
end

def sum(numbers)
  numbers.inject(0, :+)
end
# I solved it two ways for funzies, just to play with .inject. Like a leanred above, it needs the accumulator 0 so that it will still return a number if the array is empty. Good to know for old code! (though obviously you'd want to update it if you come across .inject in the wild)