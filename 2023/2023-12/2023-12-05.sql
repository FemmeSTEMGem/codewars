-- Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
-- For example (Input -> Output):
-- 2 -> 3 (1 + 2)
-- # write your SQL statement here: you are given a table 'kata' with a column 'n', return a table with 'n' and your result stored in a column naed 'res'.

SELECT
  n,
  n * (n + 1) / 2 AS res
FROM
  kata
-- These sorts of problems are definitely my weak point because it's more of a math problem than a logic problem. Since math isn't intuitive for me, my initial instinct was to do a loop. I looked online to find a more mathy way to do the solution. Looking at the other answers, this was definitely the way to go since the loop answers were FAR too long.


-- Write a function that removes the spaces from the string, then return the resultant string.
-- Examples:
-- Input -> Output
-- "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
-- "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
-- "8aaaaa dddd r     " -> "8aaaaaddddr"
-- # write your SQL statement here: you are given a table 'nospace' with column 'x', return a table with column 'x' and your result in a column named 'res'.

SELECT
  x,
  REPLACE(x, ' ', '') AS res
FROM
  nospace
-- This one was much easier. More logic than math. Just had to look up the method to use and its syntax.