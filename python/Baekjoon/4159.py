import sys
input = sys.stdin.readline

result = []

while True:
    n = int(input())
    if n == 0: break
    stations = []
    for _ in range(n):
        stations.append(int(input()))
    stations.sort()

    if stations[0] != 0:
        result.append("IMPOSSIBLE")
        continue

    flag = True
    for i in range(n):
        curLocation = stations[i]
        if i == n - 1:
            delta = (1422 - curLocation) * 2
            if delta > 200: flag = False
            break
        nextLocation = stations[i + 1]

        if curLocation + 200 < nextLocation:
            flag = False
            break

    result.append("POSSIBLE" if flag else "IMPOSSIBLE")
print("\n".join(result))