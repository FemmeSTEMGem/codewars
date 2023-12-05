# It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

def remove_char(s)
  s[1, s.length - 2]
end

print remove_char('eloquent')
# Mine works fine, but s[1...-1] would be so much better. I remember that you can use -1 to denote the last item in a list, but I also remember that occasionally not working in JavaScript so I think I put it aside in my mine. Love this range and -1 combo to make an elegant solution. Glad that I had the right idea at least. ^_^