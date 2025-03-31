import sys

K = int(sys.stdin.readline().strip())
nums = list(map(int, sys.stdin.readline().strip().split()))
a, b, n = map(int, sys.stdin.readline().strip().split())
deltaX = (b - a) / n
result = -1

origin = 0
for i in range(K + 1):
    origin += (nums[i] / (K - i + 1)) * ((b ** (K - i + 1)) - (a ** (K - i + 1)))

def f(x):
    total = 0
    for j in range(K + 1):
        total += nums[j] * (x ** (K - j))
    return total

start = -deltaX
end = deltaX

while start <= end:
    closerNum = 0
    mid = (start + end) / 2

    for k in range(n):
        x = a + (k * deltaX) + mid
        closerNum += f(x)
    closerNum *= deltaX

    absNum = abs(origin - closerNum)
    if absNum <= 1e-4 or (absNum / abs(origin)) <= 1e-4:
        result = mid
        break
    elif closerNum < origin: start = mid
    else: end = mid

print(result)
