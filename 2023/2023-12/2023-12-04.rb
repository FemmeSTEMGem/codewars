# It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

def remove_char(s)
  s[1, s.length - 2]
end

# print remove_char('eloquent')
# Mine works fine, but s[1...-1] would be so much better. I remember that you can use -1 to denote the last item in a list, but I also remember that occasionally not working in JavaScript so I think I put it aside in my mine. Love this range and -1 combo to make an elegant solution. Glad that I had the right idea at least. ^_^


# Complete the square sum function so that it squares each number passed into it and then sums the results together.
# For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.

def square_sum(numbers)
  numbers.map{|n| n**2}.sum
end

print square_sum([0, 3, 4, 5])
# Glad to see/remember that there's a .map in several languages. But I still saw another solution that I liked better: numbers.sum {|x| x * x}. Just a little tidier. But maybe n**2 is a little clearer on what's actually needing to be done in case it ever needed to be changed?