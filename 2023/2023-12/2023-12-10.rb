# Given an array of integers your solution should find the smallest integer.
# For example:
#     Given [34, 15, 88, 2] your solution will return 2
#     Given [34, -345, -1, 100] your solution will return -345
# You can assume, for the purpose of this kata, that the supplied array will not be empty.

def find_smallest_int(arr)
  arr.sort[0]
end

# Glad I remembered that Ruby's .sort() method is much kinder than JavaScript's, lol. Buuuut, completely forgot about .min...so that you can instead say "arr.min" - a much tidier solution, imo. Gosh, I love Ruby!


# Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
# For example,
# [true,  true,  true,  false,
#   true,  true,  true,  true ,
#   true,  false, true,  false,
#   true,  false, false, true ,
#   true,  true,  true,  true ,
#   false, false, true,  true]
# The correct answer would be 17.
# Hint: Don't forget to check for bad values like null/undefined

def countSheeps array
  count = 0
  array.each { |x| 
    if x == true
      count+= 1
    end}
  count
end

puts countSheeps([true,  true,  true,  false,
true,  true,  true,  true ,
true,  false, true,  false,
true,  false, false, true ,
true,  true,  true,  true ,
false, false, true,  true ])
# It's so interesting when you solve something in a very "some other language" kind of way. In my case, I did JavaScript pretty recently, so I solved this Ruby problem in a very JavaScript way. But, of course, Ruby has a much more elegant way of solving this problem. Literally one line: array.count(true). So beautiful! T_T