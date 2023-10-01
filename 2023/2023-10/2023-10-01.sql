-- `This function should test if the factor is a factor of base.
-- Return true if it is a factor or false if it is not.
-- About factors
-- Factors are numbers you can multiply together to get another number.
-- 2 and 3 are factors of 6 because: 2 * 3 = 6
--     You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
--     You can use the mod operator (%) in most languages to check for a remainder
-- For example 2 is not a factor of 7 because: 7 % 2 = 1
-- Note: base is a non-negative number, factor is a positive number.`
-- you will be given a table 'kata' with columns 'id', 'base', and 'factor'. 
-- return the 'id' and your result in a column named 'res'.

SELECT 
  id,
  base % factor = 0 AS res
FROM
  kata
-- Struggled with this one a bit longer than I should because I misread the instruction. Note to self, "slow down, don't rush!".


-- In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
-- In SQL, you will be given a table moves with columns position and roll. Return a table which uses the current position of the hero and the roll (1-6) and returns the new position in a column res.
-- Example:
-- move(3, 6) should equal 15

--# write your statement here: you will be given a table 'moves' with columns 'position' and 'roll'. return a table with a column 'res'. #--

SELECT
  position + (roll * 2) AS res
FROM
  moves
-- This is maybe a little silly, but this is the first one I got right without having to look things up since I started relearning SQL and I'm so happy about it.