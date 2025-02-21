T = int(input())
result = []

for t in range(T):
    n = int(input())
    graph = [[0] * n for _ in range(n)]
    count = 0

    def check(i, j, curGraph):
        gap = 1
        for k in range(i - 1, -1, -1):
            if curGraph[k][j] == 1: return False
            elif j - gap >= 0 and curGraph[k][j - gap] == 1: return False
            elif j + gap < n and curGraph[k][j + gap] == 1: return False
            gap += 1
        return True

    def dfs(i, curGraph):
        if i == n :
            global count
            count += 1
            return

        for j in range(n):
            if check(i, j, curGraph):
                tmpGraph = [row[:] for row in curGraph]
                tmpGraph[i][j] = 1
                dfs(i + 1, tmpGraph)

    dfs(0, graph)

    result.append(f"#{t + 1} {count}")

print("\n".join(result))
