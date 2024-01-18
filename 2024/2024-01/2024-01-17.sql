-- Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!
-- By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.
-- The number of dogs will always be a number and there will always be at least 1 dog.
-- # write your SQL statement here: 
-- you are given a table 'dalmatians' with column 'n' (int)
-- return a query with column 'n' and your result in a column named 'res' (text)
-- sort results by column 'n' ascending

SELECT
  n,
  CASE
    WHEN n <= 10 THEN 'Hardly any'
    WHEN n <= 50 THEN 'More than a handful!'
    when n = 101 THEN '101 DALMATIANS!!!'
    ELSE 'Woah that''s a lot of dogs!'
  END AS res
FROM
  dalmatians
ORDER BY n ASC
-- I like these reversals where you have to fix something rather than write from scratch. Helps to practice this, I think.


-- Write a function that returns the total surface area and volume of a box as an array: [area, volume]
-- # write your SQL statement here: 
-- you are given a table 'box' with columns: width (int), height (int), depth (int)
-- return a query with columns: width, height, depth, area (int), volume (int)
-- sort results by area ascending, then volume ascending, then width ascending, then height ascending

SELECT
  width,
  height,
  depth,
  2 * (width * depth) + 2 * (width * height) + 2 * (depth * height) AS area,
  width * height * depth AS volume
FROM
  box
ORDER BY
  area,
  volume,
  width,
  height ASC
-- Today I learned to read kata prompts better (I was calculating the area of one side of the box rather than the total surface area...also important to have kept in mind that boxes aren't always cubes, lol). I also learned that SQL doesn't do math like algebra does. For example, I had to put "2 * (width * depth)" instead of being able to put "2(width * depth)". Good to know!