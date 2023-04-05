function getGrade (s1, s2, s3) {
  let srSum = (s1+s2+s3)/3;
  if (srSum >= 90) {
    return "A";
  } else if (srSum >= 80) {
    return "B";
  } else if (srSum >= 70) {
    return "C";}
  else if (srSum >= 60) {
    return "D";}
  else {
    return "F";}
  }
