function solution(s) {
  let pCount = 0;
  let yCount = 0;

  s.split("").forEach((ele) => {
    if (ele == "p" || ele == "P") pCount++;
    if (ele == "y" || ele == "Y") yCount++;
  });

  if (pCount == 0 && yCount == 0) return true;
  if (pCount - yCount == 0) return true;
  return false;
}
