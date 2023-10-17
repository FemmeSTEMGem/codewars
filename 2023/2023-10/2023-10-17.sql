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


-- This code does not execute properly. Try to figure out why.

SELECT
  (price * amount) AS total
FROM
  items
-- Something interesting I just learned from this one is that the brackets don't matter at all. The solution works regardless. However, I noticed that more people used the brackets rather than leaving them out, so maybe it's a stylistic thing. For me, I think it would be easier to read a more complex query if you put things like this into brackets.