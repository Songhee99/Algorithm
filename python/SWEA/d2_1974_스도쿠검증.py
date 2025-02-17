T = int(input())
result = []

for t in range(T):
    flag = 1
    graph = [list(map(int, input().split())) for _ in range(9)]

    for i in range(9):
        col = set()
        row = set()
        for j in range(9):
            row.add(graph[i][j])
            col.add(graph[j][i])

        if len(row) != 9 or len(col) != 9:
            flag = 0
            break

    if flag == 1:
        def checkSquare(i, j):
            square = set()
            for y in range(3):
                for x in range(3):
                    square.add(graph[i + y][j + x])

            return 0 if len(square) != 9 else 1

        for i in range(0, 7, 3):
            for j in range(0, 7, 3):
                if checkSquare(i, j) == 0:
                    flag = 0
                    break

    result.append(f"#{t + 1} {flag}")

print("\n".join(result))
