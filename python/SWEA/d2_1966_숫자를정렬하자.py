t = int(input())
result = []

for k in range(1, t+1):
    n = int(input())
    nums = list(map(int, input().split()))
    nums.sort()
    numsStr = " ".join(list(map(str, nums)))

    result.append(f"#{k} {numsStr}")

print("\n".join(result))