# Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

# The output should be two capital letters with a dot separating them.

# It should look like this:

# Sam Harris => S.H

# patrick feeney => P.F


def abbrev_name(name)
  alteredName = name.upcase.split(" ")
  alteredName[0][0] + "." + alteredName[1][0]
end


puts abbrev_name("David Mendieta")