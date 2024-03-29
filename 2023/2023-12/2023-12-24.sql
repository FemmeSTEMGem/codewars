-- Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
-- For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
-- Constraint:
--     1 <= month <= 12
-- # write your SQL statement here: you are given a table 'quarterof' with column 'month', return a table with column 'month' and your result in a column named 'res'.

SELECT
  month,
  CASE
    WHEN month BETWEEN 1 AND 3 THEN 1
    WHEN month BETWEEN 4 AND 6 THEN 2
    WHEN month BETWEEN 7 AND 9 THEN 3
    ELSE 4
  END AS res
FROM
  quarterof
-- There's definitely more mathy and simple ways to write this, but a lot of those were voted more as clever than best practices...likely because it's a bit unclear what it's supposed to be doing if you're playing code golf with this one.


-- You are given two interior angles (in degrees) of a triangle.
-- Write a function to return the 3rd.
-- Note: only positive integers will be tested.
-- you are given a table 'otherangle' with columns 'a' and 'b'.
-- return a table with these columns and your result in a column named 'res'.

SELECT
  a,
  b,
  180 - a - b AS res
FROM
  otherangle
-- Oh man...such a dumb reason for struggling with this one. I read the problem as needing to find the length of the third side of the triangle, not the angle of the third angle of the triangle. -_- Shouldn't try to code at 1am while sick, lol.