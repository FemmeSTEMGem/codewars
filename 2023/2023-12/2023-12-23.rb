# Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

def greet(name)
  `Hello, #{name} how are you doing today?`
end
# Too easy for an 8 kyu exercise, but it ended up being a good reminder that Ruby, unlike JavaScript doesn't need/use the single backquote in order to use the #{} interpolation.


# Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
# Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

def lovefunc( flower1, flower2 )
  flower1 + flower2 % 2 != 0
end
# I remmbered a slightly more mathy way to solve this problem from a similar earlier problem from before. Still, I think I like this other solution best because it gives a better indication of what we're actually testing for:   flower1.odd? == flower2.even?