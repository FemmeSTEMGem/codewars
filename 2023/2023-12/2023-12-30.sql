-- Messi is a soccer player with goals in three leagues:
--     LaLiga
--     Copa del Rey
--     Champions
-- Complete the function to return his total number of goals in all three leagues.
-- Note: the input will always be valid.
-- For example:
-- 5, 10, 2  -->  17
-- you will be given a table, goals, with columns la_liga_goals, copa_del_rey_goals, and champions_league_goals. Return a table with a column, res.

SELECT
  la_liga_goals + copa_del_rey_goals + champions_league_goals AS res
FROM
  goals
-- Simple addition, but it never hurts to practice the basics when you're getting back into things. :)


-- Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
-- In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
-- SELECT /* your query - you are given columns a, b, and c */ AS res FROM expression_matter;
-- Notes
  -- The numbers are always positive.
  -- The numbers are in the range (1  ≤  a, b, c  ≤  10).
  -- You can use the same operation more than once.
  -- It's not necessary to place all the signs and brackets.
  -- Repetition in numbers may occur .
  -- You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

SELECT
  GREATEST((a * b) + c,
  a * (b + c),
  a * b * c,
  a + b + c,
  (a + b) * c,
  a + (b * c)
  ) AS res
FROM
  expression_matter
-- I spent way too long trying to figure out how to get arrays to work in SQL until I found out about GREATEST which is just so much faster for this problem. Also ended up with more variations that some of the solutions, so clearly some of them are redundant.