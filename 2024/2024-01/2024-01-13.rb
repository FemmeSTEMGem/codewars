# You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
#   Array can contain numbers or strings. X can be either.
#   Return true if the array contains the value, false if not.

def check(arr,element)
  arr.include?(element)
end


# Write a function which converts the input string to uppercase.

def make_upper_case(str)
  str.upcase
end
# Easy peasy. At first did .toUpperCase...but I guess that's JavaScript, lol. ^_^