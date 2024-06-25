def solution(n):
    nums = [0, 1, 1, 2, 3, 5]
    
    for i in range(6, n + 1):
        nums.append(nums[i - 1] + nums[i - 2])
        
    return nums[n] % 1234567