function solution(absolutes, signs) {
  let sign = 0;
  let result = 0;
  absolutes.forEach((ele) => {
    if (signs[sign] == false) ele = ele * -1;
    result += ele;
    sign++;
  });

  return result;
}
