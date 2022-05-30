-- Do you know recursion?
-- This is a kata series that you can only solve using recursion.
-- ##1 - Factorial

-- In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

-- 5! = 5 * 4 * 3 * 2 * 1 = 120.

-- The value of 0! is 1.

-- #Your task

-- You have to create the function factorial that receives n and returns n!. You have to use recursion.

-- create recursively the table with n up to and including 16


WITH RECURSIVE result (n, fact) AS (
  SELECT 0, 1::bigint                         --0 = starting index, 1 = starting factorial,
                                              --bigint = sets up numeric type

  UNION                                       --Combines the result sets from multiple queries

  SELECT n + 1, fact*(n+1) AS fact            --n+1 increments the index of n by one for each run
                                              --through - fact*(n+1) calculates the factorial of n using the previously calculated factorial
  FROM result WHERE n < 16                    --Continue the recursion until index n is greater 
                                              --than 16

)
SELECT *
FROM result                                   --These two lines call the factorial recursive      
                                              --function