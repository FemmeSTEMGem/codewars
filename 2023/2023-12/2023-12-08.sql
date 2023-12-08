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