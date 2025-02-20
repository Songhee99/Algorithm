result = []

for t in range(10):
    n = int(input())
    if n == 1:
        result.append(f"#{t + 1} {64}")
        continue
    graph = [[i for i in input()] for _ in range(8)]
    half = n // 2
    count = 0

    def checkRow(i, j):
        for x in range(half):
            if graph[i][j + x] != graph[i][j + n - 1 - x]: return False
        return True

    def checkCol(i, j):
        for y in range(half):
            if graph[i + y][j] != graph[i + n - 1 - y][j]: return False
        return True

    for i in range(8):
        for j in range(8):
            if i <= (8 - n):
                if checkCol(i, j): count += 1
            if j <= (8 - n):
                if checkRow(i, j): count += 1

    result.append(f"#{t + 1} {count}")

print("\n".join(result))