-- For this challenge you need to create a simple MIN / MAX statement that will return the Minimum and Maximum ages out of all the people.
-- people table schema
--     id
--     name
--     age
-- select table schema
--     age_min (minimum of ages)
--     age_max (maximum of ages)

SELECT
  MIN(age) AS age_min,
  MAX(age) AS age_max
FROM
  people
-- Had to look up how to do min/max to remember. Pleased to see that it's just a nice simple function. Annoying that the kata wanted you to alias the items you're selecting; it wasn't super obvious at first and I'm glad I read everything thoroughly.