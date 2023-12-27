# Given an array of integers, return a new array with each value doubled.
# For example:
# [1, 2, 3] --> [2, 4, 6]

def maps(x)
  x.map {|x| x*2}
end
# Just a minor syntax error after just having come off of JavaScript - I used brackets instead of curly braces. Other than that, easy peasy.


# Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
# Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
# Example:
# n= 5, m=5: 25
# n=-5, m=5:  0

def paperwork(n, m)
  n < 0 || m < 0 ? n*m : 0
end

print paperwork(5, 5)
# Made an uncharacteristically silly mistake with this one by putting the return statements on the wrong side of the colon. I blame the cold medication, lol.