# Code as fast as you can! You need to double the integer and return it.

def double_integer(i)
  return i*2
end

# Embarassingly easy for this level of kata 


# Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
# Numerical Score 	Letter Grade
# 90 <= score <= 100 	'A'
# 80 <= score < 90 	'B'
# 70 <= score < 80 	'C'
# 60 <= score < 70 	'D'
# 0 <= score < 60 	'F'
# Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

def get_grade(s1, s2, s3)
  score = (s1+s2+s3)/3
  return score >= 90 ? 'A'
  : score >= 80 ? 'B'
  : score >= 70 ? 'C'
  : score >= 60 ? 'D'
  : 'F'
end

print get_grade(95, 90, 93)
# I like my solution a lot, but I think I liked someone else's combination of case/when, coupled with Ruby's ability to use the ".." to denote a range:
  # def get_grade(s1, s2, s3)
  #   score = (s1 + s2 + s3) / 3
  #   case score
  #     when 90..100
  #       "A"
  #     when 80...90
  #       "B"
  #     when 70...80
  #       "C"
  #     when 60...70
  #       "D"
  #     when 0...60
  #       "F"
  #   end
  # end
#  It's longer, but I think I like it best for its clarity. Maybe Ruby is okay with one-lining the "when 0..60 "F"" parts?