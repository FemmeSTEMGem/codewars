-- You received an invitation to an amazing party. Now you need to write an insert statement to add yourself to the table of participants.
-- participants table schema
--     name (string)
--     age (integer)
--     attending (boolean)
-- NOTES:
--     Since alcohol will be served, you can only attend if you are 21 or older
--     You can't attend if the attending column returns anything but true

INSERT INTO
  participants (name, age, attending)
VALUES
  'Shannon', 37, true;
SELECT
  *
FROM
  participants
-- I learned/releared two things. First, I completely forgot that you need to end a statement with a semi colon before beginning another INSERT or SELECT statement. Second, I also forgot that SQL doesn't fuck with double quotes, only single quotes. It was driving me mad how it wasn't passing the tests. Hopefully that annoyance drills that into my head. ^_^


-- For this challenge you need to create a simple SUM statement that will sum all the ages.
-- people table schema
--     id
--     name
--     age
-- select table schema
--     age_sum (sum of ages)

SELECT
  SUM(age) AS age_sum
FROM
  people
-- Woohoo! I took a stab in the dark on the syntax and it worked!