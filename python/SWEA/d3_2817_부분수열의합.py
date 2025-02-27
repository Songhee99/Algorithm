T = int(input())
result = []

for t in range(T):
    n, k = map(int, input().split())
    nums = list(map(int, input().split()))
    nums.sort()
    count = 0

    def dfs(i, curSum):
        curSum += nums[i]

        if curSum >= k:
            if curSum == k:
                global count
                count += 1
            return

        for j in range(i + 1, n):
            dfs(j, curSum)

    for i in range(n):
        dfs(i, 0)

    result.append(f"#{t + 1} {count}")

print("\n".join(result))
