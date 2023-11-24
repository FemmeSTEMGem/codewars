# Complete the solution so that it reverses the string passed into it.
# 
# 'world'  =>  'dlrow'
# 'word'   =>  'drow'

def solution(str)
  str.reverse
end

print solution("hello")
# Easy peasy, but I still learned something new! I don't think I knew that I could call a function without attaching "()" to the end. Or maybe I'm just having holdover habits from JavaScript. ^_^


# Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

def bool_to_word bool
  bool ? "Yes" : "No"
end

print bool_to_word(true)
# Gahhh, I love Ruby so much! So simple and clean and beautiful. Also, I completely forgot that you can declare a parameter without needing to use brackets in Ruby. *chefs kiss*