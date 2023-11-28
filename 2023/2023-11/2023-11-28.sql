-- Very simple, given an integer or a floating-point number, find its opposite.
-- Examples:
-- 1: -1
-- 14: -14
-- -34: 34
-- You will be given a table: opposite, with a column: number. Return a table with a column: res.

SELECT
  -number AS res
FROM
  opposite
-- I took a complete stab in the dark hoping that numbers would work this way in SQL and they do! Hooray!