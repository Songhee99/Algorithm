from collections import deque

result = []

for t in range(10):
    n, start = map(int, input().split())
    nums = list(map(int, input().split()))
    graph = [set() for _ in range(101)]
    for i in range(0, n, 2):
        a, b = nums[i], nums[i + 1]
        graph[a].add(b)
    visited = [False] * 101
    lastNum = [-1, -1]

    def bfs():
        global lastNum
        queue = deque([(start, 0)])
        visited[start] = True

        while queue:
            num, count = queue.popleft()

            if count > lastNum[0]: lastNum = [count, num]
            elif count == lastNum[0] and num > lastNum[1]: lastNum = [count, num]

            for i in graph[num]:
                if not visited[i]:
                    visited[i] = True
                    queue.append((i, count + 1))

    bfs()
    result.append(f"#{t + 1} {lastNum[1]}")
print("\n".join(result))