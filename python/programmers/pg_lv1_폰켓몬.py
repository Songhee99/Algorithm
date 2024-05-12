def solution(nums):
    numSet = set(nums)
    halfNum = len(nums) // 2
    
    return halfNum if len(numSet) > halfNum else len(numSet)