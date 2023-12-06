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