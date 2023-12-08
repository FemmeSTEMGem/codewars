-- The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
-- Given a year, return the century it is in.
-- Examples
-- 1705 --> 18
-- 1900 --> 19
-- 1601 --> 17
-- 2000 --> 20
-- In SQL, you will be given a table years with a column yr for the year. Return a table with a column century.

SELECT
  CEILING(yr / 100.00) AS century
FROM
  years
-- Interesting that 100 didn't work but 100.00 did. The comments were unhelpful so I'll have to go looking around for the answer.


-- Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
-- You will be given a table 'kata' with columns 'id', 'n', 'x', and 'y'. 
-- Return the 'id' and your result in a column named 'res' using a SELECT statement.
-- You DON'T need to create a function, that's for other languages.

SELECT
  id,
  n % x = 0 AND n % y = 0 AS res
FROM
  kata
-- I'd forgotten that AND needs to be used istead of && in SQL. Otherwise, I got it! :)