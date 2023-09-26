# Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

def even_or_odd(number)
  return number % 2 == 0 ? 'Even' : 'Odd'
end

# print even_or_odd(6)
# Totally forgot that in Ruby you can literally just ask .even? and .odd?, lol