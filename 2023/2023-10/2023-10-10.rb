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