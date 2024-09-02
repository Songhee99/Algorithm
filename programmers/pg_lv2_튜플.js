function solution(s) {
  const result = [];

  const sArr = s.split("{").join("").split("},");
  const lastEle = sArr.pop().split("}}");
  lastEle.pop();
  sArr.push(lastEle.toString());

  const newSArr = Array.from({ length: sArr.length }, () => []);
  sArr.forEach((ele) => {
    const nums = ele.split(",");
    newSArr[nums.length - 1] = nums;
  });

  const numsSet = new Set();
  newSArr.forEach((nums, idx) => {
    for (let i = 0; i < idx + 1; i++) {
      if (!numsSet.has(nums[i])) {
        result.push(nums[i]);
        numsSet.add(nums[i]);
        break;
      }
    }
  });
  return result.map((v) => +v);
}
