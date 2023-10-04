-- In your application, there is a section for adults only. You need to get a list of names and ages of users from the users table, who are 18 years old or older.
-- users table schema
--     name
--     age

SELECT
  name,
  age
FROM
  users
WHERE
  age >=18
-- Got the word order mixed up a little, but otherwise got it right. :)


-- For this challenge you need to create a simple SELECT statement that will return all columns from the people table WHERE their age is over 50
-- people table schema
--     id
--     name
--     age
-- You should return all people fields where their age is over 50 and order by the age descending

SELECT
  *
FROM
  people
WHERE
  age > 50
ORDER BY
  age DESC
-- I was super close to getting the syntax correct...instead I had "by desc" instead of "order by age desc". Not too shabby for not having done this in a year. ^_^