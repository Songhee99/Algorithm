function solution(nums) {
  let phoneketmons = new Set(nums);
  let halfNum = nums.length / 2;

  return phoneketmons.size < halfNum ? phoneketmons.size : halfNum;
}
