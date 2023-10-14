-- Given the following table 'decimals':
-- ** decimals table schema **
--     id
--     number1
--     number2
-- Return a table with one column (mod) which is the output of number1 modulus number2.

SELECT
  number1 % number2 AS mod
FROM
  decimals
-- Easy peasy. I feel like I'm getting my SQL sea legs again.


-- Using only SQL, write a query that returns all rows in the custid, custname, and custstate columns from the customers table.

SELECT
  custid,
  custname,
  custstate
FROM
  customers
-- Another easy peasy one. :)