-- to hexYou have access to a table of monsters as follows:
-- monsters table schema
--     id
--     name
--     legs
--     arms
--     characteristics
-- Your task is to turn the numeric columns (arms, legs) into equivalent hexadecimal values.
-- output table schema
--     legs
--     arms

SELECT
  TO_HEX(legs) AS legs
  TO_HEX(arms) AS arms
FROM
  monsters
-- I did NOT have the brains for this, so I'm incredibly glad that there was a dedicated method for this in SQL. T_T


-- Given the following table 'decimals':
-- ** decimals table schema **
--     id
--     number1
--     number2
-- Return a table with two columns (root, log) where the values in root are the square root of those provided in number1 and the values in log are changed to a base 10 logarithm from those in number2.

SELECT
  SQRT(number1) AS root,
  LOG(number2) AS log
FROM
  decimals
-- As long as SQL has these dedicated math methods, I'm a happy gal.