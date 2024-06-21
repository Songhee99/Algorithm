import sys

n = int(sys.stdin.readline().rstrip())
arr = list(map(int, sys.stdin.readline().rstrip().split()))
x = int(sys.stdin.readline().rstrip())

arr.sort()
start = 0
end = -1
count = 0

while start - end < n:
    sumNum = arr[start] + arr[end]
    if sumNum == x:
        count += 1
        start += 1
    elif sumNum > x:
        end -= 1
    else: start += 1

print(count)