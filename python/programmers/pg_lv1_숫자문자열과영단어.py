def solution(s):
    nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

    for (idx, i) in enumerate(nums):
        s = s.replace(i, str(idx))

    return int(s)