import sys
input = sys.stdin.readline

T = int(input())
result = []
for _ in range(T):
    w = input().strip()
    k = int(input())
    if k == 1:
        result.append("1 1")
        continue
    alps = dict()
    nums = [float("inf"), -1]

    for (idx, s) in enumerate(w):
        if s in alps: alps[s].append(idx)
        else: alps[s] = [idx]

        curList = alps[s]
        if len(curList) >= k:
            curLen = curList[-1] - curList[-k] + 1
            nums[0] = min(nums[0], curLen)
            nums[1] = max(nums[1], curLen)

    if -1 in nums: result.append("-1")
    else: result.append(f"{nums[0]} {nums[1]}")
print("\n".join(result))
