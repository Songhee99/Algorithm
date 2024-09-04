function solution(n, k) {
  const changeN = n.toString(k);
  const numMap = new Map();
  let count = 0;
  let num = "";

  const checkPrime = (num) => {
    const sqrtNum = Math.sqrt(+num);
    if (sqrtNum < 1) return false;

    let prime = true;
    for (let i = 2; i < parseInt(sqrtNum) + 1; i++) {
      if (+num % i == 0) {
        prime = false;
        break;
      }
    }
    return prime;
  };

  for (let ele of changeN) {
    if (ele == 0) {
      if (num == "") continue;
      if (+num == 1) {
        num = "";
        continue;
      }
      if (numMap.has(+num)) {
        if (numMap.get(+num) == 1) count++;
        num = "";
        continue;
      }

      const prime = checkPrime(num);

      if (prime == true) {
        count++;
        numMap.set(+num, 1);
      } else numMap.set(+num, 0);
      num = "";
    } else num += ele;
  }

  if (num == "" || +num == 1) return count;
  if (numMap.has(+num)) return numMap.get(+num) == 1 ? count + 1 : count;

  const prime = checkPrime(num);
  return prime == true ? count + 1 : count;
}
