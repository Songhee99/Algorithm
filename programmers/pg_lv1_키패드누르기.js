function solution(numbers, hand) {
  const phone = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let leftFinger = "*";
  let rightFinger = "#";
  let result = "";

  const calculateCount = (ele, finger) => {
    const phoneEle = phone[ele];
    const phoneFinger = phone[finger];

    return (
      Math.abs(phoneEle[0] - phoneFinger[0]) +
      Math.abs(phoneEle[1] - phoneFinger[1])
    );
  };

  numbers.forEach((ele) => {
    if (ele == 1 || ele == 4 || ele == 7) {
      result += "L";
      leftFinger = ele;
    } else if (ele == 3 || ele == 6 || ele == 9) {
      result += "R";
      rightFinger = ele;
    } else {
      const leftCount = calculateCount(ele, leftFinger);
      const rightCount = calculateCount(ele, rightFinger);

      if (
        leftCount < rightCount ||
        (leftCount == rightCount && hand == "left")
      ) {
        result += "L";
        leftFinger = ele;
      } else {
        result += "R";
        rightFinger = ele;
      }
    }
  });

  return result;
}
