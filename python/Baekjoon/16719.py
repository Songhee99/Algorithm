str = input()
visited = [False] * len(str)
result = []

def solve(start, end):
    if start > end: return

    minIdx = -1
    for i in range(start, end + 1):
        if not visited[i] and (minIdx == -1 or str[i] < str[minIdx]): minIdx = i

    visited[minIdx] = True

    result.append("".join([str[i] for i in range(len(str)) if visited[i]]))

    solve(minIdx + 1, end)
    solve(start, minIdx - 1)

solve(0, len(str) - 1)
print("\n".join(result))