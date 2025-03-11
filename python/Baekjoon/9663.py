# pypy3로 제출해야 시간초과 안 남

import sys

n = int(sys.stdin.readline().strip())
graph = [-1] * n
result = 0

def checkQueen(i, j):
    for k in range(i):
        dist = i - k
        if graph[k] == j or graph[k] == j - dist or graph[k] == j + dist: return False
    return True

def putQueen(count):
    if count == n:
        global result
        result += 1
        return

    for j in range(n):
        if checkQueen(count, j):
            graph[count] = j
            putQueen(count + 1)
            graph[count] = -1

putQueen(0)
print(result)