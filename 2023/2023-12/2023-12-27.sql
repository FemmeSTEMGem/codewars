-- Write a function that checks if a given string (case insensitive) is a palindrome.
-- A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
-- # write your SQL statement here: you are given a table 'ispalindrome' with column 'str', return a table with column 'str' and your result in a column named 'res'.

SELECT
  str,
  LOWER(str) = REVERSE(LOWER(str)) AS res
FROM
  ispalindrome
-- Simple, but I don't think I've used nested methods in SQL before, so glad that it worked as expected. Also, and this is maybe a silly thing to come across this late in the game...but I was double checking that you could use "=" as a comparison operator rather than needing to use "==" like in a lot of coding languages. And I came across the best explanation for why that's the case...it's because:
  -- "SQL is a declarative language, and assignments are not typically made in SQL queries themselves. As a result, SQL doesn't have the problem of ambiguity of = meaning either assignment or equality check. As a result, there is no problem with using = to check equality."
-- Like, of course! But also, I don't think I'd thought of explaining it that way before...and it makes so much more sense than just remembering it as wrote memorization.


-- Given a number n, return the number of positive odd numbers below n, EASY!
-- Examples (Input -> Output)
-- 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
-- 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
-- Expect large Inputs!
-- # write your SQL statement here: you are given a table 'oddcount' with column 'n', return a table with column 'n' and your result in a column named 'res'.

SELECT
  n,
  n / 2 AS res
FROM
  odddcount
-- Today I (re-)learned that SQL truncates result of division if the division is occuring between two integers. So, in the above code, if n = 15, the result of dividing by 2 is 7.5 - but SQL truncates that to simply 7.