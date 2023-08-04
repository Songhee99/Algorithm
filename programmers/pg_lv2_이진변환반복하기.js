function solution(s) {
  let changeCount = 0;
  let zeroCount = 0;

  while (s != 1) {
    let originLeng = s.length; //처음 s 길이

    s = s.replace(/0/g, "");
    let newLeng = s.length; //0을 제거한 뒤의 s 길이

    zeroCount += originLeng - newLeng;

    s = newLeng.toString(2); //s를 이진 변환 함
    changeCount++;
  }

  var answer = [changeCount, zeroCount];
  return answer;
}
