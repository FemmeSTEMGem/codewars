# Your task is to create a function that does four basic mathematical operations.
# The function should take three arguments - operation(string/char), value1(number), value2(number).
# The function should return result of numbers after applying the chosen operation.

def basic_op(operator, value1, value2)
  eval [value1, operator, value2].join
end

puts basic_op("+", 2, 5)
# This one was weirdly tricky. A bunch of solutions either used things I hadn't heard of (.send, .public_send, .inject) or used solutions that seemed way too inelevant like if/else or when statements, or ternary operations. I think my solution is one of the better ones. Though I was a bit disappointed since I thought Ruby might have a more elegant solution for something like this; took me slightly longer to do because I was hunting for a more elegant solution.


# Nathan loves cycling.
# Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
# You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
# For example:
# time = 3 ----> litres = 1
# time = 6.7---> litres = 3
# time = 11.8--> litres = 5

def litres(time)
  return (time * 0.5).floor
end
# Easy peasy, not much to say.