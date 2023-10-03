# We need a function that can transform a string into a number. What ways of achieving this do you know?
  # Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
  # Examples
  # "1234" --> 1234
  # "605"  --> 605
  # "1405" --> 1405
  # "-7" --> -7

  def string_to_number(s)
    return s.to_i
  end
  
  # print string_to_number("7")
  # Simple enough. Nice to get back  into the swing of Ruby bit by bit. ^_^ Was also reminded that Integer(s) would have also sufficed.


# Can you find the needle in the haystack?
# Write a function findNeedle() that takes an array full of junk but containing one "needle"
# After your function finds the needle it should return a message (as a string) that says:
# "found the needle at position " plus the index it found the needle, so:
# Example(Input --> Output)
# ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

def find_needle(haystack)
  return "found the needle at position #{haystack.index('needle')}"
end

print find_needle(['3', '123124234', nil, 'needle', 'world', 'hay', 2, '3', true, false]) # 'found the needle at position 3'
# Mine is the better solution. Only issue I had was remembering how to interpolate in Ruby. :)