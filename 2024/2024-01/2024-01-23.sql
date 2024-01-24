-- Create a function with two arguments that will return an array of the first n multiples of x.
-- Assume both the given number and the number of times to count will be positive numbers greater than 0.
-- Return the results as an array or list ( depending on language ).
-- Examples
-- countBy(1,10)  should return  {1,2,3,4,5,6,7,8,9,10}
-- countBy(2,5)  should return {2,4,6,8,10}

-- # write your SQL statement here: 
-- you are given a table 'counter' with columns 'x' (int) and 'n' (int)
-- return a query with columns 'x', 'n' and your result in a column named 'res' (array)
-- sort results by column 'x' ascending, then by 'n' ascending
-- note that each pair of 'x' and 'n' in 'counter' is unique 

SELECT
  x,
  n,
  (SELECT
    array_agg(i)
  FROM 
    generate_series(x, x*n, x) i) AS res
FROM
  counter
ORDER BY x, n
-- I absolutely had to look up the answer for this one because I was only able to find one of the sql methods I ended up needing. I found array_agg fairly easily, but I couldn't figure out how to push things into the array. I wasn't able to get very far from there because I didn't realize that you could just nest inside array_agg with another SELECT statement. I'm still a little wobbly on the syntax, but at least I can understand it. This is also my first time seeing a nested SELECT statement. Oof!