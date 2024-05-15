t = int(input())
result = ""

for k in range(1, t+1):
    n = int(input())
    totalSum = 0

    for i in range(n+1):
        if i % 2 == 0: totalSum -= i
        else: totalSum += i

    result += f"#{k} {totalSum}" + "\n"

print(result)