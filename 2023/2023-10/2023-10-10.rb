# Write function bmi that calculates body mass index (bmi = weight / height2).
# if bmi <= 18.5 return "Underweight"
# if bmi <= 25.0 return "Normal"
# if bmi <= 30.0 return "Overweight"
# if bmi > 30 return "Obese"

def bmi(weight, height)
  bmi = weight/height**2
  return bmi <= 18.5 ? "Underweight"
  : bmi <= 25.0 ? "Normal"
  : bmi <= 30.0 ? "Overweight"
  : "Obese"
end

print bmi(50, 1.80)
# Other strategies used case/when instead, but I think mine is tidier. :)


# A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
# Return true if yes, false otherwise :)

def hero(bullets, dragons)
  return bullets >= dragons*2
end

print hero(7, 4)
# Other people had similarly short answers, but I like mine the best because I find it more clear.