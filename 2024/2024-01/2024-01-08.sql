-- You are a border guard sitting on the Canadian border. You were given a list of travelers who have arrived at your gate today. You know that American, Mexican, and Canadian citizens don't need visas, so they can just continue their trips. You don't need to check their passports for visas! You only need to check the passports of citizens of all other countries!
-- Select names, and countries of origin of all the travelers, excluding anyone from Canada, Mexico, or The US.
-- travelers table schema
--     name
--     country
-- NOTE: The United States is written as 'USA' in the table.
-- NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.

SELECT
  name,
  country
FROM
  travelers
WHERE country != 'Canada' AND country != 'Mexico' AND country != 'USA'
-- So definitely a few things I had to re-remember and learn in one go. First, I forgot (because I haven't done it in a while) that the WHERE statement goes after the FROM. If I'd thought about it for a sec, it makes the most sense there and I might have guessed correctly. I was trying to go off of memory rather than what made the most sense to me.
-- I completely forgot that in SQL you use AND instead of &&
-- I also completely forgot that I can't use "" in SQL...it has to be ''
-- Lastly, there's a tidier way to do this:
  -- WHERE country NOT IN ('Canada', 'Mexico', 'USA)
  -- MySQL NOT IN() makes sure that the expression proceeded does not have any of the values present in the arguments. It's used to replace a group of arguments using the <> (or !=) operator that are combined with an AND. It can make code easier to read and understand for SELECT, UPDATE or DELETE SQL commands. Generally, it will not change performance characteristics.
  -- Think of it as "not included". Consequently, there is an IN() method in SQL as well.


-- You are working for a local school, and you are responsible for collecting tuition from students. You have a list of all students, some of them have already paid tution and some haven't. Write a select statement to get a list of all students who haven't paid their tuition yet. The list should include all the data available about these students.
-- students table schema
--     name (string)
--     age (integer)
--     semester (integer)
--     mentor (string)
--     tuition_received (Boolean)

SELECT
  *
FROM
  students
WHERE
  tuition_received = false
-- From the other answers, it looks like I could have also written WHERE NOT tuition_received, but I like mine better because it flows with spoken human language better.