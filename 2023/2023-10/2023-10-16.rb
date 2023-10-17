# The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
# For example:
# 1.08 --> 30
# Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

def cockroach_speed(s)
  return ((s * 100000) / 3600).floor
end

print cockroach_speed(1.08)
# Other good solutions included Integer(s*100000/3600) and (s / 0.036).floor...though I'd say that the second one is a more mathy solution that I don't think I would have thought of on my own. I think I like the first alternate solution better than mine, though. :)