# We need a function that can transform a number (integer) into a string.
# What ways of achieving this do you know?
# Examples (input --> output):
# 123  --> "123"
# 999  --> "999"
# -100 --> "-100"

def number_to_string(num)
  num.to_s
end
# Easy peasy. Couldn't remember the exact name of the method, so I had to Google it. But the naming convention was correct.


# Very simple, given an integer or a floating-point number, find its opposite.
# Examples:
# 1: -1
# 14: -14
# -34: 34

def opposite x
  -x
end

print opposite(-2)
print opposite(2)
# Originally solved this as a ternary operation, then realised through trial and error that I could simplify even further. :)