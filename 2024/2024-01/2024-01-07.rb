# Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
# invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
# invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
# invert([]) == []
# You can assume that all values are integers. Do not mutate the input array/list.

def invert(list)
  list.map {|x| x.positive? ? x*-1 : x.abs }
end


# print invert([1,2,-3,4,5])
# This is far longer than it needs to be; {|x| -x} would have sufficed. I think if I'd taken a second to refactor, I might have thought of it as more of a math question than a sentence. ^_^