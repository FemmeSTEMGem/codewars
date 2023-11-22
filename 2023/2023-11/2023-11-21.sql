-- `You will be given a table numbers, with one column number.
-- Return a dataset with two columns: number and is_even, where number contains the original input value, and is_even containing "Even" or "Odd" depending on number column values.
-- Numbers table schema
-- * number INT
-- Output table schema
-- * number  INT
-- * is_even STRING`

SELECT
  number,
  CASE
    WHEN number % 2 = 0 THEN 'Even'
    ELSE 'Odd'
  END AS is_even
FROM
  numbers
-- Got tripped up by a few things on this one. First, I tried to look up "if" statements for SQL. I found the syntax but, it turns out that CodeWars specifically uses PostgreSQL which uses a different syntax for "if" statements. I ended up using "case" instead (I took a peek at the answers just to see what to use), but put together the SQL statement on my own. I also learned that assigning the name of the column can be done at the end of the case statement, which is nice and cuts down on repetition. Otherwise, I had the right shape of the solution which I'm happy about.


-- Complete the solution so that it reverses the string passed into it.
-- 'world'  =>  'dlrow'
-- 'word'   =>  'drow'
-- # write your SQL statement here: you are given a table 'solution' with column 'str', return a table with column 'str' and your result in a column named 'res'.

SELECT
  str,
  REVERSE(str) AS res
FROM
  solution

-- No issues here. Just had to look up the syntax of the REVERSE() function and I was good to go!