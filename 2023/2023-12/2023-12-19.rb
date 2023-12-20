# Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
# Example(Input => Output):
# 35231 => [1,3,2,5,3]
# 0 => [0]

def digitize(n) 
  n.to_s.split("").reverse.map {|element| element.to_i}
end

print digitize(12345)
# This problem was unecessarily frustrating because, even though I specifed Ruby, CodeWars gave me a starter function in JavaScript. So I was writing Ruby code inside a JavaScript function...which made VSCode very sad, lol. I didn't catch it because I just came off of doing a bunch of JavaScript exercises.
# Anyway, in true Ruby form, there was a much prettier and simpler way to solve this:
  def digitize(n)
    n.to_s.chars.reverse.map(&:to_i)
  end
  # I wasn't familiar with .chars so I didn't think to implement it. But it basically takes a string and creates an array such that each character is its own element in the array. UGH, so good! I also learned a cool little shortcut for .map()...that "&:" lets Ruby know that you want the following method to apply to each element in the array. Fucking beautiful.