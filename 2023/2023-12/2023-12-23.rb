# Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

def greet(name)
  `Hello, #{name} how are you doing today?`
end
# Too easy for an 8 kyu exercise, but it ended up being a good reminder that Ruby, unlike JavaScript doesn't need/use the single backquote in order to use the #{} interpolation.