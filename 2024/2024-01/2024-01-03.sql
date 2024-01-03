-- Now you have to write a function that takes an argument and returns the square of it.
-- you are given a table 'square' with column 'n'
-- return a table with:
--   this column and your result in a column named 'res'

SELECT
  n,
  n*2 AS res
FROM
  square
-- Easy peasy. ^_^