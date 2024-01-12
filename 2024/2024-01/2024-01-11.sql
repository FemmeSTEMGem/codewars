-- Your task is to sort the information in the provided table 'companies' by number of employees (high to low). Returned table should be in the same format as provided:
-- companies table schema
--     id
--     ceo
--     motto
--     employees

SELECT
  *
FROM
  companies
ORDER BY
  employees DESC
-- Smoother and smoother each time!


-- Given the following table 'decimals':
-- ** decimals table schema **
--     id
--     number1
--     number2
-- Return a table with two columns (number1, number2), the value in number1 should be rounded down and the value in number2 should be rounded up.

SELECT
  FLOOR(number1) AS number1,
  CEILING(number2) AS number2
FROM
  decimals
-- Easy peasy, but make a couple of small silly mistakes that kept me on my toes. Forgot the comma and accidentally shortened CEILING to CEIL (which I think is what it is in either Ruby and/or JavaScript)