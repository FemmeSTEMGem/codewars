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