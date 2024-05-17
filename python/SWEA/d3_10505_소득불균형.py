from bisect import bisect_right

T = int(input())
result = []

for t in range(1, T + 1):
    n = int(input())
    moneyList = list(map(int, input().split()))
    moneyList.sort()

    averageMoney = sum(moneyList) / len(moneyList)
    peopleNum = bisect_right(moneyList, averageMoney)

    result.append(f"#{t} {peopleNum}")
print("\n".join(result))