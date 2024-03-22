function solution(a, b) {
  let monthDay = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30];
  let day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let totalDay = monthDay.splice(0, a).reduce((acc, cur) => acc + cur) + b;
  let dayNum = totalDay % 7;

  return dayNum == 0 ? "THU" : day[dayNum - 1];
}
