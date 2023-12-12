-- Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

-- Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
-- # write your SQL statement here: you are given a table 'love' with columns 'flower1' and 'flower2', return a table with all the columns and your result in a column named 'res'.

SELECT
  flower1,
  flower2,
  flower1 % 2 != flower2 % 2 AS res
FROM
  love
-- Relatively simple, though people had other solutions that relied on slightly different mathy tactics. I think mine is fine, tbh. ^_^


-- Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
-- Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
-- Example:
-- n= 5, m=5: 25
-- n=-5, m=5:  0
-- # write your SQL statement here: you are given a table 'paperwork' with columns 'id', 'n' and 'm', return a table with columns 'n', 'm' and your result in a column named 'res'.

SELECT
  n,
  m,
  CASE
    WHEN n < 0 OR m < 0 THEN 0
    ELSE n*m
    END AS res
FROM
  paperwork
--  I discovered something interesting about SQL - it turns out that IF() statements aren't necessarily supported by all kinds of SQL databases...or, at least, the syntax can be slightly differnet across different SQLs. So apparently it's best to just use CASE for conditional statements rather than IF because of this weirdness. -_-