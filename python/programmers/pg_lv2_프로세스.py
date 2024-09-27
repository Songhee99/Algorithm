from collections import deque

def solution(priorities, location):
    count = 0
    orderIdx = 0
    sortedPriorities = sorted(priorities, reverse = True)

    def bfs():
        nonlocal count, orderIdx
        queue = deque()
        for (idx, i) in enumerate(priorities):
            queue.append([i, idx])

        while queue:
            num, curIdx = queue.popleft()
            if num == sortedPriorities[orderIdx]:
                if curIdx == location: return count + 1
                else:
                    count += 1
                    orderIdx += 1
            else: queue.append((num, curIdx))

    return bfs()