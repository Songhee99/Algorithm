T = int(input())
result = []

for t in range(T):
    n = int(input())
    nList = list(map(int, input().split()[::-1]))
    stack = []
    totalSum = 0
    count = 0
    profit = 0

    for j in nList:
        if len(stack) == 0: stack.append(j)
        elif stack[-1] < j:
            profit += (stack[-1] * count - totalSum)
            totalSum = 0
            count = 0
            stack = [j]
        else:
            totalSum += j
            count += 1

    if totalSum != 0: profit += (stack[-1] * count - totalSum)

    result.append(f"#{t + 1} {profit}")

print("\n".join(result))