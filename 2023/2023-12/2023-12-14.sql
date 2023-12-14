-- Clock shows h hours, m minutes and s seconds after midnight.
-- Your task is to write a function which returns the time since midnight in milliseconds.
-- Example:
-- h = 0
-- m = 1
-- s = 1
-- result = 61000
-- Input constraints:
--     0 <= h <= 23
--     0 <= m <= 59
--     0 <= s <= 59
-- select h + m + s as res from past

SELECT
  (h*3600000) + (m*60000) + (s*1000) AS res
FROM 
  past
-- Somehow, this one was far more annoying than it needed to be. When you Google "convert hours to miliseconds", they give you the much tidier answer of 1 * 3.6**6, which is all well and good...except I couldn't get exponents to work in SQL this time around. I found the method POWER() which allows you to recreate the math like this: h*POWER(3.6, 6)...but all my results were in exponent form and I couldn't figure out how to convert it out of that via Google. This may be due to not knowing the full extent of how POWER() works, maybe. I sometimes wish that the top results were a little more detailed. I enjoy that detail! But I can also understand how the more verbose answers aren't very popular when what most people are looking for is a basic syntax reminder. ^_^