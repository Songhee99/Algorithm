import sys

n = int(sys.stdin.readline().strip())
remain = 1000 - n
coins = [500, 100, 50, 10, 5, 1]
count = 0

for c in coins:
    count += remain // c
    remain %= c
    if remain == 0:
        print(count)
        sys.exit()

print(count)