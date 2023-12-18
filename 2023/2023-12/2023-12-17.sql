-- Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
-- Note: input will never be an empty string
-- # write your SQL statement here: you are given a table 'fakebin' with column 'x', return a table with column 'x' and your result in a column named 'res'.

SELECT
  x,
  TRANSLATE(x, '123456789', '000011111') AS res 
FROM
  fakebin
-- I found this one incredibly frustrating because I didn't know about TRANSLATE() and I was trying my best to make something like this work:
  -- SELECT
  --   x,
  --   CASE
  --     WHEN x > 0 THEN x = "0"
-- But I guess it's not possible because none of the answers had anything like this. Well, one did, but there was a bunch of additional frippery that seems to be necessary to make this work...so clearly not a solution that's super usable.
-- I had a quick check in with ChatGPT and it was able to give me a way to make my solution work, but it involved a few nested functions, so I can see why the TRANSLATE() method was used instead.
-- Here's ChatGPT's explanation of the TRANSLATE() method being used in this solution:
    -- TRANSLATE(x, '123456789', '000011111') AS res: The TRANSLATE function is used to replace characters in a string. In this case, it's replacing digits in the 'x' column with corresponding characters from the second and third arguments. Here's the breakdown:
    --     The first argument is x, which represents the input string (column values from 'x' in the 'fakebin' table).
    --     The second argument is the string '123456789', which represents the characters to be replaced.
    --     The third argument is the string '000011111', which represents the replacement characters.

    -- So, any digit from 1 to 4 in the 'x' column will be replaced with '0', and any digit from 5 to 9 will be replaced with '1'.



-- Write a function which converts the input string to uppercase.
--# write your SQL statement here: you are given a table 'makeuppercase' with column 's', return a table with column 's' and your result in a column named 'res'.

SELECT
  s,
  UPPER(s) AS res
FROM
  makeuppercase

-- Gah, finally a nice simple one to help after the first tricky one.