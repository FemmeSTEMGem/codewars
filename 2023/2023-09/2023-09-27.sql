-- Nathan loves cycling.
-- Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
-- You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
-- For example:
-- hours = 3 ----> liters = 1
-- hours = 6.7---> liters = 3
-- hours = 11.8--> liters = 5
-- Input data is available from the table cycling, which has 2 columns: id and hours. For each row, you have to return 3 columns: id, hours and liters (not litres, it's a difference from the kata description)

SELECT
  id,
  hours,
  floor(0.5 * hours) AS liters
FROM
  cycling
-- This was a nice reintroduction to SQL. I also vastly prefer structuring it this way for readability


-- Write a select statement that takes name from person table and return "Hello, <name> how are you doing today?" results in a column named greeting

SELECT
  'Hello, ' || name || ' how are you doing today?' AS greeting
FROM
  person
-- Realized in this one that single vs double quotes very much matter in SQL. Also a nice reminder on how to insert into a string.