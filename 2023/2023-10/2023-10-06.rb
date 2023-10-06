# Make a simple function called greet that returns the most-famous "hello world!".

def greet
  return "hello " + "world" + "!"
end

print greet
# Look, these are cute exercises and all, but I'm doing them to both practice what I know and learn things. Kata like these aren't very useful to me. Just wanna complete theis one and move on, lol.


# Clock shows h hours, m minutes and s seconds after midnight.
# Your task is to write a function which returns the time since midnight in milliseconds.
# Example:
# h = 0
# m = 1
# s = 1
# result = 61000
# Input constraints:
#     0 <= h <= 23
#     0 <= m <= 59
#     0 <= s <= 59

def past(h, m, s)
  return (h*3.6e+6) + (m*60000) + (s*1000)
end

print past(0,1,1) # 61000
# Fairly simple, though I think I like the clarity of this one better:
  # def past(h, m, s)
  # (h * 3_600_000) + (m * 60_000) + (s * 1_000)
  # end
# I just input the multiplication the way that Google gave it to me when I asked it for the conversion. 3_600_000 is longer, but I think a lot more clear and tidy.