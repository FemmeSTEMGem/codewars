-- Now you have to write a function that takes an argument and returns the square of it.
-- you are given a table 'square' with column 'n'
-- return a table with:
--   this column and your result in a column named 'res'

SELECT
  n,
  n*2 AS res
FROM
  square
-- Easy peasy. ^_^


-- Return the Nth Even Number
-- Example(Input --> Output)
-- 1 --> 0 (the first even number is 0)
-- 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
-- 100 --> 198
-- 1298734 --> 2597466
-- The input will not be 0.
-- # write your SQL statement here: you are given a table 'ntheven' with column 'n', return a table with column 'n' and your result in a column named 'res'.

SELECT
  n,
  CASE
    WHEN n = 1 THEN 0
    ELSE n * 2
  END AS res
FROM
  ntheven
-- Definitely a mathy problem that I've solved before. Didn't feel like a mathy problem today, so I looked at my JavaScript solution and used that to take care of that piece. I had a small problem where I accidentally put a comma after "res", so that was super frustrating because it took me a while to see it...even from looking at the solutions. I think the problem right now is that I'm still feeling shaky enough on SQL that, even if I'm pretty sure I have the right answer, I'm not sure ENOUGH to look for typos instead of assuming I got someting wrong with the syntax.