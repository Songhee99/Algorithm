function solution(new_id) {
  const step1 = new_id.toLowerCase();
  const step2 = step1.replace(/[^a-z0-9\-_.]/g, "");
  const step3 = step2.replace(/\.{2,}/g, ".");
  const step4 = step3.replace(/^\.+|\.+$/g, "");
  const step5 = step4.length == 0 ? "a" : step4;
  const step6 =
    step5.length >= 16 ? step5.slice(0, 15).replace(/^\.+|\.+$/g, "") : step5;
  let step7 = step6;
  while (step7.length <= 2) {
    const lastEle = step7[step7.length - 1];
    step7 += lastEle;
  }

  return step7;
}

// 아래는 체이닝 버전
function solution(new_id) {
  const step1To4 = new_id
    .toLowerCase()
    .replace(/[^a-z0-9\-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.+|\.+$/g, "");
  let answer =
    step1To4.length == 0
      ? "a"
      : step1To4.length >= 16
      ? step1To4.slice(0, 15).replace(/^\.+|\.+$/g, "")
      : step1To4;
  while (answer.length <= 2) {
    const lastEle = answer[answer.length - 1];
    answer += lastEle;
  }

  return answer;
}
