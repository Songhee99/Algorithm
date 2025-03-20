import sys

n = int(sys.stdin.readline().strip())
graph = [set() for _ in range(n)]
root = -1
nums = list(map(int, sys.stdin.readline().strip().split()))
for i in range(n):
    if nums[i] == -1: root = i
    else: graph[nums[i]].add(i)
removeNode = int(sys.stdin.readline().strip())
count = 0

def dfs(i):
    global count

    if i == removeNode: return
    if len(graph[i]) == 0:
        count += 1
        return

    copyI = graph[i].copy()

    for j in graph[i]:
        if j == removeNode: copyI.remove(j)
        else: dfs(j)

    if len(copyI) == 0: count += 1

dfs(root)
print(count)
