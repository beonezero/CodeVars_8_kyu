function bmi(weight, height) {
  let bmi1 = weight / (height ** 2)
  if (bmi1 <= 18.5 ) {return "Underweight"}
  else if (bmi1 <= 25.0 ) {return "Normal"}
  else if (bmi1 <= 30.0 ) {return "Overweight"}
  else {return "Obese"}
}
