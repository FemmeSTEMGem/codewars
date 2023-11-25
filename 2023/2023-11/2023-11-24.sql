-- Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
-- # write your SQL statement here: you are given a table 'booltoword' with column 'bool', return a table with column 'bool' and your result in a column named 'res'.

SELECT
  bool,
  CASE
    WHEN bool = true THEN 'Yes'
    ELSE 'No'
  END AS res
FROM
  booltoword
-- I definitely haven't used CASE very much in SQL and I'm honestly glad that I'm getting a bit more practice with it. It'll obviously be incredibly useful.


-- It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
-- # write your SQL statement here: you are given a table 'removechar' with column 's', return a table with column 's' and your result in a column named 'res'.

SELECT
  s,
  SUBSTRING(s, 2, LENGTH(s) - 2) AS res
FROM
  removechar
-- Not too shabby at all once I found the SUBSTRING method! ^_^