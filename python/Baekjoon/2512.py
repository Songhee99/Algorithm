import sys

n = int(sys.stdin.readline().rstrip())
moneys = list(map(int, sys.stdin.readline().rstrip().split()))
limit = int(sys.stdin.readline().rstrip())
result = 0

if sum(moneys) <= limit: print(max(moneys))
else:
    start = 1
    end = max(moneys)

    while start <= end:
        mid = (start + end) // 2
        curSum = sum([i if i < mid else mid for i in moneys])

        if curSum > limit: end = mid - 1
        else:
            result = mid
            start = mid + 1
    print(result)