function solution(s) {
  let count = 0;

  s.split("").forEach((ele) => {
    if (ele == "(") {
      count++;
    } else {
      count--;
    }
    if (count < 0) return (count = "break");
    if (count == "break") return;
  });

  if (count == 0) return true;
  return false;
}