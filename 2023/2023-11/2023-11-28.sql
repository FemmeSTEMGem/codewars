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


-- Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
-- Examples (input -> output)
-- 6, "I"     -> "IIIIII"
-- 5, "Hello" -> "HelloHelloHelloHelloHello"
-- --# write your SQL statement here: you are given a table 'repeatstr' with columns 'n' and 's', return a table with all columns and your result in a column named 'res'.

SELECT
  n,
  s,
  REPEAT(s, n) AS res
FROM
  repeatstr
-- Done perfectly. Hit a minor hitch when the results were returned in a different order than the tests were expecting. But I figured it out right away (despite the order not being part of the instructions) and it was fixed on the first try.