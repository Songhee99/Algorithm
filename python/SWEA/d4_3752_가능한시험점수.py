T = int(input())
result = []

for t in range(T):
    n = int(input())
    nums = list(map(int, input().split()))
    maxSum = sum(nums)
    dp = [False] * (maxSum + 1)
    dp[0] = True

    for num in nums:
        for i in range(maxSum, -1, -1):
            if dp[i]: dp[i + num] = True

    count = sum(dp)
    result.append(f"#{t + 1} {count}")

print("\n".join(result))
