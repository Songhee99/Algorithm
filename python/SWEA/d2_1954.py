T = int(input())
result = []

for t in range(T):
    n = int(input())
    snail = [[0] * n for _ in range(n)]
    dy = [0, 1, 0, -1]
    dx = [1, 0, -1, 0]
    x = 0
    y = 0
    d = 0
    num = 1

    while num <= n * n:
        snail[y][x] = str(num)
        num += 1
        ny = y + dy[d]
        nx = x + dx[d]

        if nx < 0 or ny < 0 or nx >= n or ny >= n or snail[ny][nx] != 0:
            d = (d + 1) % 4
            ny = y + dy[d]
            nx = x + dx[d]

        y = ny
        x = nx

    result.append(f"#{t + 1}")
    for i in snail:
        result.append(" ".join(i))


print("\n".join(result))